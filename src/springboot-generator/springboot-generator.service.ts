import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';

@Injectable()
export class SpringbootGeneratorService {
  async generateSpringProject(filename: string): Promise<string> {
    const url = 'https://start.spring.io/starter.zip';
    const params = {
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
    };

    try {
      const response = await axios({
        method: 'GET', // Usar GET ya que 'start.spring.io' acepta parámetros como query
        url,
        params,
        responseType: 'arraybuffer',
      });

      // Guardar el archivo en el sistema de archivos local
      fs.writeFileSync(`${filename}.zip`, response.data);
      console.log(`Archivo ${filename}.zip guardado correctamente.`);
      return `Archivo ${filename}.zip guardado correctamente.`;
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
