import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpringbootGeneratorService } from './springboot-generator.service';

@Controller('springboot-generator')
export class SpringbootGeneratorController {
  constructor(private readonly springbootGeneratorService: SpringbootGeneratorService) {}

  @Post()
  async generateSpringBoot(@Body('filename') filename: string): Promise<string> {
    if (!filename) {
      filename = 'spring-backend'; // Usar un nombre por defecto si no se proporciona
    }
    return this.springbootGeneratorService.generateSpringProject(filename);
  }
}
