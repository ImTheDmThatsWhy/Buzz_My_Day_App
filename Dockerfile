FROM node:alpine

WORKDIR /app/frontend

COPY ./coffee_front_end/package.json ./

RUN npm install

COPY ./coffee_front_end ./

RUN npm run build

WORKDIR /app/backend

COPY ./backend/package.json ./

RUN npm install

COPY ./backend ./

RUN rm -rf ./dist

RUN mv ../frontend/dist ./

CMD [ "npm", "start" ]