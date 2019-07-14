FROM node:latest

WORKDIR /app

COPY . .

ENV NODE_ENV=staging

ENV PORT=8002

RUN npm install

EXPOSE 8002

CMD ["npm", "start"]
