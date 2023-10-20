# Use the official Node.js image as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the source code of the application to the working directory
COPY . .

# Build the application
RUN npm run build

# Use the official Nginx image to serve the built application
FROM nginx:alpine

# Copy the built application from the build container to the Nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
