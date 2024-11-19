import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor (private readonly prisma: PrismaClient) {}

  create (review: CreateReviewDto) {
    return this.prisma.review.create({
      data: review,
    });
  }

  findAll () {
    return this.prisma.review.findMany();
  }

  findOne (id: string) {
    return this.prisma.review.findUnique({
      where: { id },
    });
  }

  update (id: string, review: UpdateReviewDto) {
    return this.prisma.review.update({
      where: { id },
      data: review,
    });
  }

  remove (id: string) {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}
