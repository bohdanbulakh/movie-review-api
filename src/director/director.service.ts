import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { PrismaClient } from '@prisma/client';
import { EntityNotFoundException } from '../exceptions/entity-not-found.exception';

@Injectable()
export class DirectorService {
  constructor (
      private  readonly prisma: PrismaClient,
  ) {}

  create (director: CreateDirectorDto) {
    return this.prisma.director.create({
      data: director,
    });
  }

  findAll () {
    return this.prisma.director.findMany();
  }

  findOne (id: string) {
    return this.prisma.director.findUnique({
      where: { id },
    });
  }

  async update (id: string, directorData: UpdateDirectorDto) {
    const director = await this.prisma.director.findUnique({
      where: { id },
    });

    if (!director) {
      throw new EntityNotFoundException('Director');
    }

    return this.prisma.director.update({
      where: { id },
      data: directorData,
    });
  }

  remove (id: string) {
    return this.prisma.director.delete({
      where: { id },
    });
  }
}
