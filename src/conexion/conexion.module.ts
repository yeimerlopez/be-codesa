import { Module } from '@nestjs/common';
import { ConexionService } from './conexion.service';
import { ConexionGateway } from './conexion.gateway';

@Module({
  providers: [ConexionGateway, ConexionService],
  exports: [ConexionService],
})
export class ConexionModule {}
