FROM node:latest

WORKDIR /app

COPY . .

ENV NODE_ENV=staging

ENV PORT=8001

RUN npm install

EXPOSE 8001

CMD ["npm", "start"]
