import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { EntityNotFoundException } from '../exceptions/entity-not-found.exception';

@Injectable()
export class DirectorByIdPipe implements PipeTransform {
  constructor (private readonly prisma: PrismaClient) {}

  async transform (id: string): Promise<string> {
    const director = this.prisma.director.findUnique({
      where: { id },
    });

    if (!director) {
      throw new EntityNotFoundException('Director');
    }

    return id;
  }
}
