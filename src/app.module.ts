import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [ExampleModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
