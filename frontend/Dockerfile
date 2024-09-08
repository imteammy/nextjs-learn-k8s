# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of your application code
COPY . .

# Build the Next.js app
RUN pnpm run build

# Expose the port that Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "start"]
