FROM node:lts-alpine3.13
RUN apk update
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD  ["serve", "-s", "build"]
