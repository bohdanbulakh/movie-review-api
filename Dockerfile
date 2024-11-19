FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN npm install && \
    npm run build && \
    npm prune --prod && \
    npx prisma generate

FROM alpine AS production

RUN apk --no-cache add nodejs
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

ENTRYPOINT ["node", "/app/dist/main.js"]
