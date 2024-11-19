import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ActorService {
  constructor (private readonly prisma: PrismaClient) {}

  create (actor: CreateActorDto) {
    return this.prisma.actor.create({
      data: actor,
    });
  }

  findAll () {
    return this.prisma.actor.findMany();
  }

  findOne (id: string) {
    return this.prisma.actor.findUnique({
      where: { id },
    });
  }

  update (id: string, actor: UpdateActorDto) {
    return this.prisma.actor.update({
      where: { id },
      data: actor,
    });
  }

  remove (id: string) {
    return this.prisma.actor.delete({
      where: { id },
    });
  }
}
