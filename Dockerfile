FROM node:latest

WORKDIR /usr/stc/www

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
