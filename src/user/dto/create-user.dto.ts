import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
    username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
    password: string;

  @IsNotEmpty()
  @IsString()
    firstName: string;

  @IsOptional()
  @IsString()
    lastName?: string;
}
