import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SalaService } from './sala.service';

@WebSocketGateway({
  cors: {
    origin: '*', // Configura los orígenes permitidos para los clientes (opcional)
  },
})
export class SalaGateway implements OnModuleInit {
  @WebSocketServer()
  public server: Server;

  constructor(private readonly salaService: SalaService) {}

  onModuleInit() {
    this.server.on('connection', (socket: Socket) => {
      const id = socket.id;
      // let { nameRoom } = socket.handshake.query;
      
      // console.log(`Nuevo dispositivo: ${id} conectado a la ${nameRoom}`);
      // socket.join(nameRoom);

      // socket.on('event', (res) => {
      //   socket.to(nameRoom).emit('event', res);
      // });

      // Manejar la creación de salas
      socket.on('createRoom', (roomName: string) => {
        console.log(`Sala creada: ${roomName}`);
        socket.join(roomName);
        socket.emit('roomCreated', roomName);
      });

      // Manejar la invitación a salas
      socket.on('inviteToRoom', (roomName: string, userId: string) => {
        console.log(`Invitando al usuario ${userId} a la sala ${roomName}`);
        const userSocket = this.server.sockets.sockets.get(userId);
        if (userSocket) {
          userSocket.join(roomName);
          userSocket.emit('invitedToRoom', roomName);
        } else {
          socket.emit('error', `Usuario ${userId} no encontrado`);
        }
      });

            // Manejar la unión a salas
      socket.on('joinRoom', (roomName: string) => {
        console.log(`Unido a la sala: ${roomName}`);
        socket.join(roomName);
        socket.emit('roomJoined', roomName);
      });

      socket.on('disconnect', () => {
        console.log(`Client disconnected: ${id}`);
      });
    });
  }
}