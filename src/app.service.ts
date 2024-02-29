import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHello(): { app: string; date: string } {
    return {
      app: 'Focused shares quotes',
      date: '29/02/2024',
    };
  }
}
