import { Injectable } from '@nestjs/common';

// Services sind für die Speicherung und den Abruf von Daten zuständig
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
