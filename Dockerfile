FROM node:latest

RUN mkdir app-malvinas-russell
ADD package.json /app-malvinas-russell/
WORKDIR /app-malvinas-russell
RUN npm install
ADD server.js /app-malvinas-russell/
ADD src/  /app-malvinas-russell/
RUN npm run build
CMD ["node","server.js"]
