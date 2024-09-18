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


      // Crear un stream de lectura a partir del buffer de datos
      const bufferStream = new stream.PassThrough();
      bufferStream.end(response.data);

      // Descomprimir el archivo ZIP
      const zip = new AdmZip(response.data);
      const tempDir = path.join(__dirname, '..', '..', 'tmp', filename);
      zip.extractAllTo(path.join(__dirname, '..', '..', 'tmp', filename), true);

// Crear un archivo .txt con el contenido "Hello World!"
const txtFilePath = path.join(tempDir, 'text.txt');
fs.writeFileSync(txtFilePath, 'Hello World!');

// Volver a comprimir el proyecto modificado
const modifiedZip = new AdmZip();
modifiedZip.addLocalFolder(tempDir);
const modifiedZipBuffer = modifiedZip.toBuffer();

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
}