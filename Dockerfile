FROM node:12.6-alpine

WORKDIR /tmp
COPY package.json /tmp/
RUN npm i

WORKDIR /usr/src/app
COPY ./dist/ /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

CMD ["npm", "run build"]

EXPOSE 7200