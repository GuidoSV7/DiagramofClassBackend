import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';
import * as stream from 'stream';
import * as path from 'path';

var AdmZip = require("adm-zip");

@Injectable()
export class SpringbootGeneratorService {
  async generateSpringProject(filename: string): Promise<stream.PassThrough> {
    const url = 'https://start.spring.io/starter.zip';
    const params = new URLSearchParams({
      type: 'maven-project',
      language: 'java',
      bootVersion: '3.2.0',
      baseDir: 'mi-proyecto-backend',
      groupId: 'com.tuempresa',
      artifactId: 'backend-generador',
      name: 'MiBackend',
      description: 'Proyecto Backend Generador',
      packageName: 'com.tuempresa.backend',
      dependencies: 'web,data-jpa,data-rest,postgresql',
      javaVersion: '17',
      packaging: 'jar',
    });

    try {
      const response = await axios({
        method: 'GET',
        url,
        params,
        responseType: 'arraybuffer',
      });


     const  contentaAddProperties = `spring.datasource.url=jdbc:postgresql://localhost:5432/DiagramOfClassDB
                          spring.datasource.username=postgres
                          spring.datasource.password=1234
                          spring.jpa.show-sql=true
                          spring.jpa.hibernate.ddl-auto=update
                          spring.jpa.generate-ddl=true`

      // Crear un stream de lectura a partir del buffer de datos
      const bufferStream = new stream.PassThrough();
      bufferStream.end(response.data);

     // Descomprimir el archivo ZIP
      const zip = new AdmZip(response.data);
      const tempDir = path.join(__dirname, '..', '..', 'tmp', filename);
      zip.extractAllTo(path.join(__dirname, '..', '..', 'tmp', filename), true);


      const zipEntries = zip.getEntries();
      zipEntries.forEach(function (zipEntry) {
        if (zipEntry.entryName.endsWith('application.properties')) {
          let fileContent = zipEntry.getData().toString('utf8');
         // console.log(fileContent);

           // Añadir el contenido de contentaAddProperties
           fileContent += contentaAddProperties;
           zipEntry.setData(Buffer.from(fileContent, 'utf8'));
 
         //  console.log('Modified content:', fileContent);

        }
      });

     
     
  // Volver a comprimir el proyecto modificado
  const modifiedZipBuffer = zip.toBuffer();
  
  // Crear un stream de lectura a partir del buffer de datos del ZIP modificado
  const modifiedBufferStream = new stream.PassThrough();
  modifiedBufferStream.end(modifiedZipBuffer);
  
  // Limpiar el directorio temporal
  fs.rmSync(tempDir, { recursive: true, force: true });
   // Devolver el stream para que pueda ser enviado como respuesta
   return modifiedBufferStream;

    } catch (error) {
      // Mostrar la respuesta de error decodificada
      if (error.response && error.response.data) {
        const errorData = Buffer.from(error.response.data).toString('utf-8');
        console.error('Error al generar el proyecto Spring Boot:', errorData);
      } else {
        console.error('Error al generar el proyecto Spring Boot:', error.message);
      }
      throw new HttpException('Error al generar el proyecto Spring Boot', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }




  async generateEntitysRepositories(): Promise<{ [key: string]: string }> {
    const jsonContent = {
      "Products": {
        "name": "string",
        "price": "number"
      }
    };
    const generatedFiles: { [key: string]: string } = {};
    try {
      console.log(jsonContent);

      for (const entityName in jsonContent) {
        if (jsonContent.hasOwnProperty(entityName)) {
          const attributes = jsonContent[entityName];

          // Generar el código de la entidad
          let entityCode = `
          package com.tuempresa.backend.datarest;
          
          import jakarta.persistence.Entity;
          import jakarta.persistence.GeneratedValue;
          import jakarta.persistence.GenerationType;
          import jakarta.persistence.Id;
          import lombok.Getter;
          import lombok.Setter;
          
          @Getter
          @Setter
          @Entity
          public class ${capitalize(entityName)} {
          
              @Id
              @GeneratedValue(strategy = GenerationType.AUTO)
              private long id;
          `;

          for (const attributeName in attributes) {
            if (attributes.hasOwnProperty(attributeName)) {
              const attributeType = attributes[attributeName];
              entityCode += `
              private ${mapType(attributeType)} ${attributeName};`;
            }
          }

          entityCode += `
          }
          `;

          // Generar el código del repositorio
          let repositoryCode = `
          package com.tuempresa.backend.datarest;

          import org.springframework.data.repository.CrudRepository;
          import org.springframework.data.repository.PagingAndSortingRepository;
          import org.springframework.data.rest.core.annotation.RepositoryRestResource;
          
          @RepositoryRestResource(collectionResourceRel = "${entityName.toLowerCase()}", path = "${entityName.toLowerCase()}")
          public interface ${capitalize(entityName)}Repository extends PagingAndSortingRepository<${capitalize(entityName)}, Long>, CrudRepository<${capitalize(entityName)}, Long> {
          }
          `;

          // Guardar los archivos generados en el objeto
          generatedFiles[`${capitalize(entityName)}.java`] = entityCode;
          generatedFiles[`${capitalize(entityName)}Repository.java`] = repositoryCode;
        }
      }
      return generatedFiles;
      
    } catch (error) {
      console.error('Error processing the JSON content:', error.message);
      throw new HttpException('Error processing the JSON content', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}



function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function mapType(type: string): string {
  switch (type.toLowerCase()) {
    case 'string':
      return 'String';
    case 'number':
      return 'Double';
    case 'boolean':
      return 'Boolean';
    default:
      return 'String';
  }


  
}