import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ConexionService } from './conexion/conexion.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly conexionService: ConexionService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Body() loginData: { login: string; clave: string; claveAplicacion: string; ptoVta: string }) {
    try {
      const result = await this.conexionService.login(
        loginData.login,
        loginData.clave,
        loginData.claveAplicacion,
        loginData.ptoVta
      );
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
