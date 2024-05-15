#FROM nginx
#COPY dist /usr/share/nginx/html

FROM node:latest

WORKDIR /app

COPY dist /app

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "--cors", "-p", "8080"]
