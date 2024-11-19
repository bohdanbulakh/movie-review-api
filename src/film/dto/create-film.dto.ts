import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateFilmDto {
  @IsNotEmpty()
  @IsString()
    name: string;

  @IsNotEmpty()
  @IsDate()
    release: Date;

  @IsNotEmpty()
  @IsUUID()
    genreId: string;

  @IsNotEmpty()
  @IsUUID()
    directorId: string;
}
