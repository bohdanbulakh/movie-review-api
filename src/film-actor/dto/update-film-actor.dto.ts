import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateFilmActorDto {
  @IsNotEmpty()
  @IsUUID()
    filmId: string;

  @IsNotEmpty()
  @IsUUID()
    actorId: string;
}
