FROM node:14.17-buster-slim

RUN mkdir app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm","start","0.0.0.0:3000"]
