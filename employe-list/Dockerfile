FROM node:15
WORKDIR /employe-list
COPY package.json .
RUN npm install
EXPOSE 5001
COPY . ./
CMD node index.js

