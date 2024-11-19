import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmActorService } from './film-actor.service';
import { CreateFilmActorDto } from './dto/create-film-actor.dto';
import { UpdateFilmActorDto } from './dto/update-film-actor.dto';

@Controller('film-actors')
export class FilmActorController {
  constructor (private readonly filmActorService: FilmActorService) {}

  @Post()
  create (@Body() createFilmActorDto: CreateFilmActorDto) {
    return this.filmActorService.create(createFilmActorDto);
  }

  @Get()
  findAll () {
    return this.filmActorService.findAll();
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.filmActorService.findOne(id);
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() updateFilmActorDto: UpdateFilmActorDto) {
    return this.filmActorService.update(id, updateFilmActorDto);
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.filmActorService.remove(id);
  }
}
