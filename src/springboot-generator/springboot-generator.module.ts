import { Module } from '@nestjs/common';
import { SpringbootGeneratorService } from './springboot-generator.service';
import { SpringbootGeneratorController } from './springboot-generator.controller';
import { GptModule } from 'src/gpt/gpt.module';
import { ArchitectModule } from 'src/architect/architect.module';

@Module({
  controllers: [SpringbootGeneratorController],
  providers: [SpringbootGeneratorService],
  imports: [GptModule, ArchitectModule]
})
export class SpringbootGeneratorModule {}
