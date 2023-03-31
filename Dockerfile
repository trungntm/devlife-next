FROM node:16-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --silent
RUN yarn global add react-scripts@5.0.1 -g --silent

COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]
