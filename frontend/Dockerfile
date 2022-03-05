FROM node:17-alpine3.14 as dev
ENV NODE_ENV dev

WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]
