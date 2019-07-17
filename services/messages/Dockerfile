FROM node:latest

WORKDIR /app

COPY . .

ENV NODE_ENV=docker

ENV PORT=9002

RUN npm install

EXPOSE 9002

CMD ["npm", "start"]
