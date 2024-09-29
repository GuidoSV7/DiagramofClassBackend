import { Module } from '@nestjs/common';
import { ArchitectService } from './architect.service';
import { ArchitectController } from './architect.controller';

@Module({
  controllers: [ArchitectController],
  providers: [ArchitectService],
  exports: [ArchitectService]
  
})
export class ArchitectModule {}
