import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller sind für die Bearbeitung eingehender Anfragen und die Rückgabe von Antworten an den Client zuständig.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Dieser Controller kann nur GET Anfragen händeln
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
