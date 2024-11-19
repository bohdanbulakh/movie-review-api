import { Actor, Director, Film, Genre, PrismaClient, User } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {
  const actors: Actor[] = await Promise.all(new Array(4).fill(null).map(
    () => prisma.actor.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      },
    })
  ));

  const directors: Director[] = await Promise.all(new Array(4).fill(null).map(
    () => prisma.director.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      },
    })
  ));

  const genres: Genre[] = await Promise.all(new Array(4).fill(null).map(
    () => prisma.genre.create({
      data: {
        name: faker.book.genre(),
      },
    })
  ));

  const users: User[] = await Promise.all(new Array(4).fill(null).map(
    () => prisma.user.create({
      data: {
        username: faker.internet.username(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      },
    })
  ));

  const films: Film[] = await Promise.all(new Array(4).fill(null).map(
    (_, index) => prisma.film.create({
      data: {
        name: faker.book.title(),
        release: faker.date.anytime(),
        directorId: directors[index].id,
        genreId: genres[index].id,
      },
    })
  ));

  for (let i = 0; i < 4; i++) {
    await prisma.filmActor.create({
      data: {
        actor: {
          connect: {
            id: actors[i].id,
          },
        },
        film: {
          connect: {
            id: films[i].id,
          },
        },
      },
    });
  }

  for (let i = 0; i < 4; i++) {
    await prisma.review.create({
      data: {
        rating: faker.number.int(10),
        comment: faker.lorem.sentences(2),
        userId: users[i].id,
        filmId: films[i].id,
      },
    });
  }
};

main();
