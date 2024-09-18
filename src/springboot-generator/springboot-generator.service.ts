import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as stream from 'stream';

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

      // Devolver el stream para que pueda ser enviado como respuesta
      return bufferStream;
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