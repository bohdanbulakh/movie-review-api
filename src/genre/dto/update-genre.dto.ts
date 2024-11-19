import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateGenreDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
    name?: string;
}
