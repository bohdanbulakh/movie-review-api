import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateReviewDto {
  @IsOptional()
  @IsNumber()
    rating?: number;

  @IsOptional()
  @IsString()
    comment?: string;

  @IsOptional()
  @IsUUID()
    filmId?: string;

  @IsOptional()
  @IsUUID()
    userId?: string;
}
