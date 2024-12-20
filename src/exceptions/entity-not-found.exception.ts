import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityNotFoundException extends HttpException {
  constructor (entity: string) {
    super(
      `${entity} with such id not found`,
      HttpStatus.NOT_FOUND,
    );
  }
}
