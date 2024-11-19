import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateFilmActorDto {
  @IsNotEmpty()
  @IsUUID()
    filmId: string;

  @IsNotEmpty()
  @IsUUID()
    actorId: string;
}
