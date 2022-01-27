FROM node:15
WORKDIR /current-time
COPY package.json .
RUN npm install
EXPOSE 5000
COPY . ./
CMD node index.js

