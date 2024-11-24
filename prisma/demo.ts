// It is demo file, DON'T RUN IT!

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main () {
  // All methods of prisma.yourEntity return a promise of type Promise<YourEntityType>
  // YourEntityType contain all fields, that you described in model YourEntity in schema.prisma file


  // Create an entity

  // "data: {}" must contain all required fields
  const user = await prisma.user.create({
    data: {
      username: faker.internet.username(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    },
  });

  // error because "username" is missed
  const user2 = await prisma.user.create({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    data: {
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    },
  });


  // Get

  // get first entity, which fields match fields of "where: {}"
  await prisma.user.findFirst();

  await prisma.user.findFirst({
    where: {
      firstName: user.firstName,
    },
  });

  // get entity by unique fields, "where: {}" must contain at least one unique field
  await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  await prisma.user.findUnique({
    where: {
      username: user.username,
    },
  });

  //error because there are no unique fields in "where: {}"
  await prisma.user.findUnique({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    where: {},
  });

  // get all entities, if their fields match fields of "where: {}"
  await prisma.user.findMany({
    where: {
      firstName: user.firstName,
    },
  });

  await prisma.user.findMany();


  // Update

  // all fields in "data: {}" are always optional
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    },
  });

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {},
  });

  // error here, because lastName is not unique
  await prisma.user.update({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    where: {
      lastName: user.lastName,
    },
    data: {
      firstName: faker.person.firstName(),
    },
  });

  // Delete
  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  await prisma.user.delete({
    where: {
      username: user.username,
    },
  });

  await prisma.user.delete({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    where: {
      firstName: user.firstName,
    },
  });

  // include related entities
  await prisma.user.findMany({
    include: {
      reviews: true,
    },
  });

  await prisma.user.findMany({
    include: {
      reviews: {
        where: {
          comment: null,
        },
      },
    },
  });


  // create entity with relation

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      reviews: {
        create: {
          filmId: 'some-id',
          rating: 10,
        },
      },
    },
  });

  // select fields

  await prisma.user.findMany({
    select: {
      firstName: true,
      lastName: true,
    },
  });
}

main();
