import { WebSocketGateway } from '@nestjs/websockets';
import { ConexionService } from './conexion.service';

@WebSocketGateway()
export class ConexionGateway {
  constructor(private readonly conexionService: ConexionService) {}
}
