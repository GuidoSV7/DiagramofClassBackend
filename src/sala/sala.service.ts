import { Injectable } from '@nestjs/common';

interface Client{
    id: string;
    name: string;
}

@Injectable()
export class SalaService {
    private clients: Record<string, Client> = {};
    private diagramData: any = {};
    
    onClientConnected(client:Client){
        this.clients[client.id] = client;
    }

    onClientDisconnected(id:string){
        delete this.clients[id];
    }

    getClients(){
        return Object.values(this.clients);
    }

    getDiagram() {
        return this.diagramData;
      }
    
      updateDiagram(newData: any) {
        this.diagramData = newData;
      }

}
