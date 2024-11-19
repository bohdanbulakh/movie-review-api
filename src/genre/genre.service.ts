import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class GenreService {
  constructor (private readonly prisma: PrismaClient) {
  }

  create (genre: CreateGenreDto) {
    return this.prisma.genre.create({
      data: genre,
    });
  }

  findAll () {
    return this.prisma.genre.findMany();
  }

  findOne (id: string) {
    return this.prisma.genre.findUnique({
      where: { id },
    });
  }

  update (id: string, genre: UpdateGenreDto) {
    return this.prisma.genre.update({
      where: { id },
      data: genre,
    });
  }

  remove (id: string) {
    return this.prisma.genre.delete({
      where: { id },
    });
  }
}
