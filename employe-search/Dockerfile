FROM node:15
WORKDIR /employe-search
COPY package.json .
RUN npm install
EXPOSE 5002
COPY . ./
CMD node index.js

