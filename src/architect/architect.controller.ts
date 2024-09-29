import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ArchitectService } from './architect.service';
import { CreateJsonDto } from './dtos/createjson.dto';
import { Response } from 'express';

@Controller('architect')

export class ArchitectController {
  constructor(private readonly architectService: ArchitectService) {}

  @Post('json-to-xml')
  convertJsonToXml(@Body() createJsonDto: CreateJsonDto, @Res() res: Response) {
    const xml = this.architectService.jsonToXml(createJsonDto);
    res.setHeader('Content-Type', 'application/xml');
    res.send(xml);
  }
  }


