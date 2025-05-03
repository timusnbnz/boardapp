import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Server, Socket } from 'socket.io';
import { Controller } from '@nestjs/common';

/**
 * WebSocket-Controller für Echtzeit-Kommunikation
 * Authentifiziert Verbindungen über JWT-Token
 */
@WebSocketGateway()
@Controller('sockets')
export class SocketsController implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly jwtService: JwtService) {}

  handleConnection(client: Socket): void {
    const token = client.handshake.query.token as string;

    // Verbindung abbrechen, wenn kein Token vorhanden
    if (!token) {
      client.disconnect();
      return;
    }

    try {
      // Benutzer-ID aus Token extrahieren und an Socket-Instanz anhängen
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
    // Callback ausführen, damit Client Latenz messen kann
    if (typeof callback === 'function') {
      callback();
    }
  }
}
