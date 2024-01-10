FROM node:16.14.0
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend
COPY package.json /usr/src/backend
RUN npm cache clean --force
RUN npm install
RUN npm rebuild bcrypt --build-from-source
COPY . /usr/src/backend
EXPOSE 3000
RUN npm run build
CMD ["npm","start"]