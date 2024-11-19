import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FilmService {
  constructor (private readonly prisma: PrismaClient) {}

  create (film: CreateFilmDto) {
    return this.prisma.film.create({
      data: film,
    });
  }

  findAll () {
    return this.prisma.film.findMany();
  }

  findOne (id: string) {
    return this.prisma.film.findUnique({
      where: { id },
    });
  }

  update (id: string, film: UpdateFilmDto) {
    return this.prisma.film.update({
      where: { id },
      data: film,
    });
  }

  remove (id: string) {
    return this.prisma.film.delete({
      where: { id },
    });
  }
}
