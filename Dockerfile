FROM node:14.4.0

WORKDIR /app

COPY package*.json ./
COPY snowpack.config.js ./

COPY src ./
COPY public ./
COPY fixtures ./

RUN npm install --silent
RUN npm install snowpack -g --silent

CMD["npm", "build:snowpack"]

CMD["npm", "start:snowpack"]

EXPOSE 8080
