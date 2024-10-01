import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { SpringbootGeneratorService } from './springboot-generator.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArchitectService } from 'src/architect/architect.service';
import { CreateJsonDto } from 'src/architect/dtos/createjson.dto';

@Controller('springboot-generator')
export class SpringbootGeneratorController {
  constructor(
    private readonly springbootGeneratorService: SpringbootGeneratorService,
    private readonly architecService: ArchitectService
  
  ) {}

  @Post('download')
  @UseInterceptors(FileInterceptor('file'))
  async downloadSpringProject( @Body() createJsonDto: CreateJsonDto, @Res() res: Response) {
    try {

      //const xmlContent = file.buffer.toString('utf-8');
      const xmlContent = await this.architecService.jsonToXml(createJsonDto);

      const fileStream = await this.springbootGeneratorService.generateSpringProject('mi-proyecto-backend',{ prompt: xmlContent });
      
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