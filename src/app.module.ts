import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubsModule } from './clubs/clubs.module';
import { Clubs } from './clubs/entity/clubs.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'clubity',
      entities: [Clubs],
      synchronize: true, //use only while developing later change to false
    }),
    ClubsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}