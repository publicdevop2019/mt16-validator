FROM node:14.15.1-alpine3.12 AS node

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

CMD [ "node", "dist/index.js" ]