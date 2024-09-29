import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GptService } from './gpt.service';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('xmltoentyrepo')
  @UseInterceptors(FileInterceptor('file'))
  async xmltoentyrepo(
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!file) {
      throw new BadRequestException('No file was uploaded.');
    }
    const xmlContent = file.buffer.toString('utf-8');
   
    return this.gptService.xmltoentyrepo({ prompt: xmlContent });
  }


  @Post('createjavafiles')
  @UseInterceptors(FileInterceptor('file'))
  async createjavafiles(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response
  ) {
    if (!file) {
      throw new BadRequestException('No file was uploaded.');
    }

    const xmlContent = file.buffer.toString('utf-8');

  
    const fileStream = await this.gptService.createjavafiles({ prompt: xmlContent});

    res.set({
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="files-generated.zip"',
    });
    
    res.send(fileStream);
    
  }
}