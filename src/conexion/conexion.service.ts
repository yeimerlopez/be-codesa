import { Injectable, OnModuleInit} from '@nestjs/common';
import {io, Socket} from 'socket.io-client';

@Injectable()
export class ConexionService implements OnModuleInit{

  private socket: Socket;

  onModuleInit() {
    // this.socket = io('ws://10.198.10.15:6813');
    this.socket = io('http://10.198.10.15:6813');
    this.setupSocketListeners();
  }

  private setupSocketListeners() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor WebSocket');
    });

    this.socket.on('error', (error) => {
      console.error('Error de WebSocket:', error);
    });

  }



  async login(login: string, clave: string, claveAplicacion: string, ptoVta: string) {

    const trama = `112,${login},${clave},${claveAplicacion},${ptoVta}`;
    console.log(trama)

    return new Promise((resolve, reject) => {
      this.socket.emit('login', trama, (response) => {
        const [codTrama, respuesta, ...rest] = response.split(',');
        
        if (respuesta === '0') {
          resolve(rest);
        } else {
          reject(new Error(rest[0]));
        }
      });
    });
  }




}
