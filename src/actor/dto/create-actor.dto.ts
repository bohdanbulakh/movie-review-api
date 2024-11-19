import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateActorDto {
  @ApiProperty({
    description: 'First name of the actor',
  })
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @IsString({ message: 'First name must be a string' })
  @MinLength(3, { message: 'First name must be at least 3 characters long' })
  @MaxLength(50, { message: 'First name must be shorter than 50 characters long' })
    firstName: string;

  @ApiProperty({
    description: 'Last name of the actor',
  })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  @IsString({ message: 'Last name must be a string' })
  @MinLength(3, { message: 'Last name must be at least 3 characters long' })
  @MaxLength(50, { message: 'Last name must be shorter than 50 characters long' })
    lastName: string;
}
