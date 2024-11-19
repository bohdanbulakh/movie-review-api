import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDirectorDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
      firstName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
      lastName: string;
}
