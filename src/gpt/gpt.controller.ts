import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Res, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GptService } from './gpt.service';
import { Response } from 'express';
import * as fs from 'fs';
import * as pdf from 'pdf-parse';

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
  

  @Post('extract-questions')
  @UseInterceptors(FileInterceptor('file'))
  async extractQuestions(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response
  ) {
    if (!file) {
      throw new BadRequestException('No file was uploaded.');
    }

    try {
      const data = await pdf(file.buffer);
      const questions = await this.gptService.extractQuestionsFromPdf(data.text);
      
      return res.status(HttpStatus.OK).json({
        success: true,
        questions
      });
    } catch (error) {
      console.error('Error processing PDF:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Error processing PDF',
        error: error.message
      });
    }
  }


  @Post('flashcards')
  @UseInterceptors(FileInterceptor('file'))
  async flashCards(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response
  ) {
    if (!file) {
      throw new BadRequestException('No file was uploaded.');
    }

    try {
      const data = await pdf(file.buffer);
      const questions = await this.gptService.flashCardFromPdf(data.text);
      
      return res.status(HttpStatus.OK).json({
        success: true,
        questions
      });
    } catch (error) {
      console.error('Error processing PDF:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Error processing PDF',
        error: error.message
      });
    }
  }
  
  
}