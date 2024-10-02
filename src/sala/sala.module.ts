import { Module } from '@nestjs/common';
import { SalaService } from './sala.service';
import { SalaGateway } from './sala.gateway';

@Module({
  providers: [SalaGateway, SalaService],
})
export class SalaModule {}
