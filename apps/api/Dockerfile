# Use Node.js LTS version
FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --prod

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD [ "pnpm", "start" ]
