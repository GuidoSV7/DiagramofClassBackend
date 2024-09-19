import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { SpringbootGeneratorService } from './springboot-generator.service';

@Controller('springboot-generator')
export class SpringbootGeneratorController {
  constructor(private readonly springbootGeneratorService: SpringbootGeneratorService) {}

  @Post('download')
  async downloadSpringProject(@Res() res: Response) {
    try {
      const fileStream = await this.springbootGeneratorService.generateSpringProject('mi-proyecto-backend');
      res.set({
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="mi-proyecto-backend.zip"',
      });
      fileStream.pipe(res);
    } catch (error) {
      res.status(500).send('Error al generar el proyecto Spring Boot');
    }
  }


}