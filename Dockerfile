FROM node:21-alpine3.19

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]