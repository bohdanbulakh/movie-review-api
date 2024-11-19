import { Injectable } from '@nestjs/common';
import { CreateFilmActorDto } from './dto/create-film-actor.dto';
import { UpdateFilmActorDto } from './dto/update-film-actor.dto';

@Injectable()
export class FilmActorService {
  create (createFilmActorDto: CreateFilmActorDto) {
    return 'This action adds a new filmActor';
  }

  findAll () {
    return 'This action returns all filmActor';
  }

  findOne (id: number) {
    return `This action returns a #${id} filmActor`;
  }

  update (id: number, updateFilmActorDto: UpdateFilmActorDto) {
    return `This action updates a #${id} filmActor`;
  }

  remove (id: number) {
    return `This action removes a #${id} filmActor`;
  }
}
