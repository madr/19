FROM node:20-alpine AS base
WORKDIR /app
FROM base AS deps
COPY package*.json ./
RUN npm install
FROM deps AS final
RUN mkdir ./assets ./pub ./src
VOLUME ["./assets", "./pub", "./src"]
COPY . .
ENTRYPOINT ["node", "index.js"]