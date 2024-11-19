import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateDirectorDto {
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
      firstName?: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
      lastName?: string;
}
