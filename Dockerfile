FROM node

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn add react-scripts@4.0.3 -g --silent

# add app
COPY . ./

CMD ["yarn", "start"]