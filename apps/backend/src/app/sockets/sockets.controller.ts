import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Server, Socket } from 'socket.io';
import { Controller } from '@nestjs/common';

@WebSocketGateway()
@Controller('sockets')
export class SocketsController implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly jwtService: JwtService) {}

  handleConnection(client: Socket): void {
    const token = client.handshake.query.token as string;

    if (!token) {
      client.disconnect();
      return;
    }

    try {
      const decoded = this.jwtService.verify(token);
      client.data.user = decoded;
    } catch (error) {
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket): void {
    console.log(`Client disconnected: ${client.id}`);
  }
  
  @SubscribeMessage('ping')
  handlePing(client: Socket, callback: Function): void {
    // Simply call the callback to allow the client to measure latency
    if (typeof callback === 'function') {
      callback();
    }
  }
}
