# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

ENV DEBIAN_FRONTEND=noninteractive

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN apt-get update \
  && apt-get install -y unixodbc-dev

# Install dependencies
RUN npm install --force

# Copy the rest of the application code to the container
COPY . .

# Expose the application port
EXPOSE 3000

CMD ["node", "src/index.js"]
