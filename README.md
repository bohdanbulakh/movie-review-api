<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

This is a demo application created to show basics of the NestJS framework and Prisma ORM

## Requirements

- Node.js and npm
- MySQL
- Docker

## Development

1. Clone repo
   ```bash
   git clone https://github.com/bohdanbulakh/movie-review-api.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create .env file with such variables:

    ```dotenv
    DATABASE_URL=
    MYSQL_ROOT_PASSWORD=
    PORT=
    ```

4. Apply prisma schema to your database
   ```bash
   npx prisma migrate dev
   ```

5. Run application
   ```bash
   npm run start:dev
   ```

## Deploy

1. Clone repository

2. Ensure you have docker installed on your machine

3. Create `.env` with all the variables, which were described in previous section and add `DOCKER_DATABASE_URL`variable.
   It is the same `DATABASE_URL` but instead of hostname/ip you have to write docker container name(in our docker
   compose file it's called `mysql`)

   Example:

    ```dotenv
    DATABASE_URL=mysql://user:password@localhost:3306/movie_review
    DOCKER_DATABASE_URL=mysql://user:password@mysql:3306/movie_review
    ```

4. Start app
   ```shell
   sudo docker compose up
   ```

## Resources

Check out a few resources that may come in handy when working with this project:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about NestJS.
- Visit the [Prisma ORM documentation](https://www.prisma.io/docs/orm) to learn more about Prisma ORM.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time
  using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our
  official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework)
  and [LinkedIn](https://linkedin.com/company/nestjs).

