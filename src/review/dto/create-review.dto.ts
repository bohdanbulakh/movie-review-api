import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsNumber()
    rating: number;

  @IsOptional()
  @IsString()
    comment?: string;

  @IsNotEmpty()
  @IsUUID()
    filmId: string;

  @IsNotEmpty()
  @IsUUID()
    userId: string;
}
