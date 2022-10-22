import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { Clubs } from './entity/clubs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clubs])],
  exports: [TypeOrmModule],
  controllers: [ClubsController],
  providers: [ClubsService]
})
export class ClubsModule {}