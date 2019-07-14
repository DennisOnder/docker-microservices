FROM node:latest

WORKDIR /app

COPY . .

ENV NODE_ENV=staging

ENV PORT=8003

RUN npm install

EXPOSE 8003

CMD ["npm", "start"]
