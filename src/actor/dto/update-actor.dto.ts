import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateActorDto {
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
