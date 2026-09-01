import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { XmlToEntyRepoDto } from './dtos/xmltoentyrepo.dto';
import { xmlToEntyRepoUseCase } from './use-cases/xmltoentyrepo.use-case';
import { promises as fs } from 'fs';
import { CreateJavaFilesDto } from './dtos/create-java-files.dto';
import { PdfDto } from './dtos/pdf.dto';
import { PdfUseCase } from './use-cases/pdf.use.case';
import { FlashCardsUseCase } from './use-cases/flashcards.use.case';

var AdmZip = require("adm-zip");

interface FileData {
  name: string;
  content: string;
}

@Injectable()
export class GptService {

  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  async xmltoentyrepo(xmltoentyrepoDto: XmlToEntyRepoDto) {
    const { prompt } = xmltoentyrepoDto;

    const xmlContent = prompt;
   
    return await xmlToEntyRepoUseCase(this.openai, {
      prompt:xmlContent
    });

    
  
  }

  async createjavafiles(xmltoentyrepoDto: XmlToEntyRepoDto): Promise<Buffer> {

    
    const files = await this.xmltoentyrepo(xmltoentyrepoDto);
    const zip = new AdmZip();

    
    // Iterar sobre los archivos y agregarlos al ZIP
    files.forEach(file => {
      zip.addFile(file.name, Buffer.from(file.content, 'utf-8'));
    });

    // Convertir el ZIP en un buffer
    return zip.toBuffer();
  }


  async extractQuestionsFromPdf(text: string): Promise<any> {
    try {
      return await PdfUseCase(this.openai, {
        prompt: text
      });
    } catch (error) {
      console.error('Error en extractQuestionsFromPdf:', error);
      throw error;
    }
  }

  async flashCardFromPdf(text: string): Promise<any> {
    try {
      return await FlashCardsUseCase(this.openai, {
        prompt: text
      });
    } catch (error) {
      console.error('Error en FlashCardsUseCase:', error);
      throw error;
    }
  }
   
}
