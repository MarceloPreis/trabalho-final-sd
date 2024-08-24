# Dockerfile for Node.js Application
FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "index.js"]
