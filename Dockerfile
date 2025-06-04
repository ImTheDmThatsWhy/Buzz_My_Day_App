FROM node:alpine

WORKDIR /app/frontend

COPY ./coffee_front_end/package.json ./

RUN npm install

COPY ./coffee_front_end ./

ARG VITE_API_ENDPOINT=/api

ENV VITE_API_ENDPOINT=${VITE_API_ENDPOINT}

RUN VITE_API_ENDPOINT=${VITE_API_ENDPOINT} npm run build

WORKDIR /app/backend

COPY ./backend/package.json ./

RUN npm install

COPY ./backend ./

RUN rm -rf ./dist

RUN mv ../frontend/dist ./source/dist

CMD [ "npm", "start" ]