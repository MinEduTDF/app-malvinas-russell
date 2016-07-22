FROM node:0.10.46


# Clona el repositorio 
RUN git clone https://github.com/MinEduTDF/app-malvinas-russell /app-malvinas-russell
WORKDIR /app-malvinas-russell
RUN npm install --no-dev 


CMD ["npm", "start"] 