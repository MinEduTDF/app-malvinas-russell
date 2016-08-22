FROM node:latest


# Clona el repositorio
RUN git clone https://github.com/MinEduTDF/app-malvinas-russell /app-malvinas-russell
WORKDIR /app-malvinas-russell
RUN npm install && npm run build 
CMD ["node","server.js"]
