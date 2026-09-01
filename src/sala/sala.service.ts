import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io';


interface ConnectedClients{
    [id: string]: Socket;
}
interface Client{
    id: string;
    name: string;
}

@Injectable()
export class SalaService {
  private connectedClients: ConnectedClients = {}

  registerClient(client:Socket){
    this.connectedClients[client.id] = client;
  }

  removeClient(clientId: string){
    delete this.connectedClients[clientId];
  }

  getConnectedClient(): number{
    return Object.keys(this.connectedClients).length;
  }

}
