import { Module } from '@nestjs/common';
import { SpringbootGeneratorService } from './springboot-generator.service';
import { SpringbootGeneratorController } from './springboot-generator.controller';

@Module({
  controllers: [SpringbootGeneratorController],
  providers: [SpringbootGeneratorService],
})
export class SpringbootGeneratorModule {}
