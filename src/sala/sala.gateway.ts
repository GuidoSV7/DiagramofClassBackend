import { OnModuleInit } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SalaService } from './sala.service';

@WebSocketGateway({
  cors: {
    origin: '*', // Configura los orígenes permitidos para los clientes (opcional)
  },
})
export class SalaGateway implements OnGatewayConnection, OnGatewayDisconnect {
 
  @WebSocketServer() wss:Server;

  constructor(
    private readonly salaService: SalaService
  ){}
 
  handleConnection(client: Socket) {
   this.salaService.registerClient(client);
    console.log({conectados: this.salaService.getConnectedClient()});
  }
  handleDisconnect(client: Socket) {
    this.salaService.removeClient(client.id);
  }

  

  emitEvent(payload = {}) {
    console.log(payload);
    this.wss.emit('event', payload);
  }


}