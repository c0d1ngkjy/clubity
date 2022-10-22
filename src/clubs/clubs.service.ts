import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clubs } from './entity/clubs.entity';

@Injectable()
export class ClubsService {
    constructor(
        @InjectRepository(Clubs)
        private clubsRepository: Repository<Clubs>,
      ) {}
    
      findAll(): Promise<Clubs[]> {
        return this.clubsRepository.find();
      }
    
      async create(club: Clubs): Promise<void> {
        await this.clubsRepository.save(club);
      }
}