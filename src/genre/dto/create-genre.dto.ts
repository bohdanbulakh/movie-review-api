import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
    name: string;
}
