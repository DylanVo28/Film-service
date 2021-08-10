import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './config/database.providers';
import { FilmsController } from './films/films.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseProviders)
  ],
  controllers: [AppController, FilmsController],
  providers: [AppService],
})
export class AppModule {}
