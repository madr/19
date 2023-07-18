FROM node:20-alpine
RUN apk add --no-cache bash
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN mkdir ./assets ./pub ./src
VOLUME ["./assets", "./pub", "./src"]
COPY . .
ENTRYPOINT ["bash"]