FROM node:14.5.0-alpine

WORKDIR /app/
ADD package.json /app/package.json
RUN npm install
ADD . /app/

CMD ["npm", "run", "start"]
