FROM node:16.20.0
RUN mkdir -p /usr/src/ClientApp
WORKDIR /usr/src/ClientApp
COPY package.json /usr/src/ClientApp
RUN npm cache clean --force
RUN npm install
COPY . /usr/src/ClientApp
EXPOSE 4200
CMD ["npm","start"]
