FROM node:latest

WORKDIR /app

COPY . .

ENV NODE_ENV=docker

ENV PORT=9001

RUN npm install

EXPOSE 9001

CMD ["npm", "start"]
