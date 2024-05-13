# # Use Node.js 14 as the base image
# FROM node:14 AS builder

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package.json .
# COPY package-lock.json .

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the application
# RUN npm run build

# # Stage 2 - Serve the production build with Nginx
# FROM nginx:alpine

# # Copy the built files from the previous stage to the NGINX directory
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Expose port 80 to the outside world
# EXPOSE 80


# Use the official Node.js 14 image as a base
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app with Vite
RUN npm run build

# Stage 2: Serve the built app using a lightweight HTTP server
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/dist ./dist

# Install a lightweight HTTP server
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Command to run the HTTP server and serve the React app
CMD ["serve", "-s", "dist", "-l", "5000"]

