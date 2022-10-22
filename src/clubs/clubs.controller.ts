import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { Clubs } from './entity/clubs.entity';

@Controller('/api/Clubs')
export class ClubsController {
    constructor(private clubsService: ClubsService){};

    @Get()
    findAll(): Promise<Clubs[]> {
        return this.clubsService.findAll();
    }

    @Post()
    create(@Body() club: Clubs){
        return this.clubsService.create(club);
    }
}