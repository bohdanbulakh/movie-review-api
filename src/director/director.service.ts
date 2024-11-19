import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { PrismaClient } from '@prisma/client';

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

  update (id: string, director: UpdateDirectorDto) {
    return this.prisma.director.update({
      where: { id },
      data: director,
    });
  }

  remove (id: string) {
    return this.prisma.director.delete({
      where: { id },
    });
  }
}
