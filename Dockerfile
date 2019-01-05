FROM node:8-alpine

# Create nectar directory
WORKDIR /usr/src/next-drum-machine

# Initialize env variables
ARG NPM_TOKEN

# Install root dependencies
COPY package*.json ./
COPY .npmrc ./
RUN npm install --loglevel error

# Bundle app source
COPY . .

# Build app
RUN npm run build

EXPOSE 5000
CMD [ "npm", "start" ]
