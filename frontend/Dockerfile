FROM node:alpine

RUN mkdir /app/
WORKDIR /app/
ADD . /app/
RUN npm install

CMD ["npm", "run", "start"]
