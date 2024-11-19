import { Module } from '@nestjs/common';
import { FilmActorService } from './film-actor.service';
import { FilmActorController } from './film-actor.controller';

@Module({
  controllers: [FilmActorController],
  providers: [FilmActorService],
})
export class FilmActorModule {}
