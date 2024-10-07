# Etapa de construção
FROM node:22-alpine3.19 AS build

WORKDIR /usr/src/app

COPY package*.json ./
COPY entrypoint.sh ./  
COPY .env /usr/src/app/.env

RUN yarn install

COPY . .

RUN chmod +x /usr/src/app
RUN chmod +x /usr/src/app/entrypoint.sh

RUN npx prisma generate --schema=/usr/src/app/src/infra/database/prisma/schema.prisma 

RUN yarn build

EXPOSE 4400

ENTRYPOINT [ "/usr/src/app/entrypoint.sh", "yarn", "start:prod" ]