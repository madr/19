FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN mkdir ./assets ./pub ./src
VOLUME ["./assets", "./pub", "./src"]
COPY . .
ENTRYPOINT ["node", "index.js"]