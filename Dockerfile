FROM node:16-alpine AS development

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build


FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV MAGIC_TOKEN=${MAGIC_TOKEN}
ENV DATABASE_URL=${DATABASE_URL}

WORKDIR /usr/src/app

COPY package*.json ./

RUN 

COPY . .

COPY --from=development /usr/src/app/apps/api/dist ./dist

EXPOSE 5050

CMD ["node", "dist/src/main"]
