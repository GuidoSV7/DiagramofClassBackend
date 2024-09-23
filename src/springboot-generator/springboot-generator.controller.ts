import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Res } from '@nestjs/common';
import { Response } from 'express';
import { SpringbootGeneratorService } from './springboot-generator.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('springboot-generator')
export class SpringbootGeneratorController {
  constructor(private readonly springbootGeneratorService: SpringbootGeneratorService) {}

  @Post('download')
  @UseInterceptors(FileInterceptor('file'))
  async downloadSpringProject( @UploadedFile() file: Express.Multer.File,@Res() res: Response) {
    try {

      if (!file) {
        throw new BadRequestException('No file was uploaded.');
      }
      const xmlContent = file.buffer.toString('utf-8');

      const fileStream = await this.springbootGeneratorService.generateSpringProject('mi-proyecto-backend',{ prompt: xmlContent, file: file.path });
      
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