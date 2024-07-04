import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConexionModule } from './conexion/conexion.module';
import { ConexionService } from './conexion/conexion.service';

@Module({
  imports: [ConexionModule],
  controllers: [AppController],
  providers: [AppService, ConexionService],
})
export class AppModule {}
