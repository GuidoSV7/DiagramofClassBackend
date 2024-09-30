import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ArchitectService } from './architect.service';
import { CreateJsonDto } from './dtos/createjson.dto';
import { Response } from 'express';
import { CreateXmlDto } from './dtos/createxml.dto';
import { promises as fs } from 'fs';

import { FileInterceptor } from '@nestjs/platform-express';

@Controller('architect')

export class ArchitectController {
  constructor(private readonly architectService: ArchitectService) {}

  @Post('json-to-xml')
  convertJsonToXml(@Body() createJsonDto: CreateJsonDto, @Res() res: Response) {
    const xml = this.architectService.jsonToXml(createJsonDto);
    res.setHeader('Content-Type', 'application/xml');
    res.send(xml);
  }
  
  @Post('xml-to-json')
  @UseInterceptors(FileInterceptor('file'))
  async convertXmlToJson(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    

    const xmlContent = file.buffer.toString('utf8');
    const json = await this.architectService.xmlToJson({ xml: xmlContent });
    res.setHeader('Content-Type', 'application/json');
    res.send(json);
  }

  @Post('json-to-graph')
  @UseInterceptors(FileInterceptor('file'))
  async convertJsonToGraph(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }
    const xmlContent = file.buffer.toString('utf8');
    const json = await this.architectService.xmlToJson({ xml: xmlContent });

    
    
    const graph = await this.architectService.jsonToGraph(json);
    console.log(graph);

    res.setHeader('Content-Type', 'application/json');
    res.send(graph);
    return graph;
  }

}


