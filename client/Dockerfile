FROM node:18-alpine3.17

RUN mkdir client
COPY . /client
WORKDIR /client
RUN npm i
RUN npm i -g serve
RUN npm run build

CMD serve -l 3000 build