import { Injectable } from '@nestjs/common';
import { CreateFilmActorDto } from './dto/create-film-actor.dto';
import { UpdateFilmActorDto } from './dto/update-film-actor.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FilmActorService {
  constructor (private readonly prisma: PrismaClient) {}

  create (filmActor: CreateFilmActorDto) {
    return this.prisma.filmActor.create({
      data: filmActor,
    });
  }

  findAll () {
    return this.prisma.filmActor.findMany();
  }

  findOne (id: string) {
    return this.prisma.filmActor.findUnique({
      where: { id },
    });
  }

  update (id: string, filmActor: UpdateFilmActorDto) {
    return this.prisma.filmActor.update({
      where: { id },
      data: filmActor,
    });
  }

  remove (id: string) {
    return this.prisma.filmActor.delete({
      where: { id },
    });
  }
}
