import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateFilmDto {
  @IsOptional()
  @IsString()
    name?: string;

  @IsOptional()
  @IsDate()
    release?: Date;

  @IsOptional()
  @IsUUID()
    genreId?: string;

  @IsOptional()
  @IsUUID()
    directorId?: string;
}
