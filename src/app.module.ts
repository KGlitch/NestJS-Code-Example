import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [ExampleModule, UsersModule],  // localhost:3000/example ODER localhost:3000/users 
  controllers: [AppController],           // localhost:3000
  providers: [AppService],
})
export class AppModule {}
