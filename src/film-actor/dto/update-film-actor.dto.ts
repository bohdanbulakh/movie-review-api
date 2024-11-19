import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmActorDto } from './create-film-actor.dto';

export class UpdateFilmActorDto extends PartialType(CreateFilmActorDto) {}
