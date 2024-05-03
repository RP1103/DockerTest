 # Use the official Node.js 14 image
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app in production mode
RUN npm run build -- --prod

# Use a lightweight image for the production build
FROM nginx:alpine

# Copy the build output to the nginx public directory
COPY --from=build /app/dist/celestradepro /usr/share/nginx/html
