FROM node:latest

WORKDIR /app

COPY . .

ENV NODE_ENV=docker

ENV PORT=8002

RUN npm install

EXPOSE 8002

CMD ["npm", "start"]
