

# # Use an official Node.js runtime as the base image for the build stage
# FROM node:16 as build

# # Set the working directory in the container
# WORKDIR /app

# # Copy the package.json and package-lock.json from the Angular app directory to the container
# COPY ./celestradepro/package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the entire Angular app source code from the Angular app directory to the container
# COPY ./celestradepro .

# # Build the Angular app
# RUN npm run build -- --output-path=dist

# # Use a smaller base image to serve the Angular app
# FROM node:16

# # Install a simple HTTP server to serve the Angular app
# RUN npm install -g http-server

# # Set the working directory in the container
# WORKDIR /app

# # Copy the built Angular app from the build stage to the container
# COPY --from=build /app/dist .

# # Expose the port your app will listen on (e.g., 8080)
# EXPOSE 4200:4200

# # Start the HTTP server to serve your Angular app
# CMD ["http-server", "-p", "4200"]

# Stage 1: Build Angular app
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json from the Angular app directory to the container
COPY ./celestradepro/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular app source code from the Angular app directory to the container
COPY ./celestradepro .

# Build the Angular app
RUN npm run build -- --output-path=dist

# Stage 2: Serve Angular app and set up Node.js with MongoDB
FROM node:16

# Install dependencies for Node.js backend
WORKDIR /app/backend

# Copy the backend package.json and package-lock.json
COPY ./celestradepro/Backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend source code
COPY ./celestradepro/Backend .

# Copy the built Angular app from the build stage to the container
WORKDIR /app
COPY --from=build /app/dist ./dist

# Install a simple HTTP server to serve the Angular app
RUN npm install -g http-server

# Expose the port your app will listen on (e.g., 4200 for Angular and 3000 for Node.js)
EXPOSE 4200 3000

# Start the backend server and the HTTP server to serve your Angular app
CMD ["sh", "-c", "node backend/server.js & http-server dist -p 4200"]





