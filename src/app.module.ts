import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FilmModule } from './film/film.module';
import { ActorModule } from './actor/actor.module';
import { FilmActorModule } from './film-actor/film-actor.module';
import { DirectorModule } from './director/director.module';
import { ReviewModule } from './review/review.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports:
      [UserModule,
        FilmModule,
        ActorModule,
        FilmActorModule,
        DirectorModule,
        ReviewModule,
        GenreModule,
      ],
})
export class AppModule {
}
