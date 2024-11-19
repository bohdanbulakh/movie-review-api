import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
    username?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
    password?: string;

  @IsOptional()
  @IsString()
    firstName?: string;

  @IsOptional()
  @IsString()
    lastName?: string;
}
