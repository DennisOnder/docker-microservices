FROM node:latest

WORKDIR /app

COPY . .

ENV NODE_ENV=docker

ENV PORT=9003

RUN npm install

EXPOSE 9003

CMD ["npm", "start"]
