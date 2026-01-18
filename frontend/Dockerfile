FROM node:20-alpine

WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json ./

# Install dependencies (including devDependencies like Vite)
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Expose the port Railway provides
ENV HOST=0.0.0.0
EXPOSE $PORT

# Start the preview server
CMD ["sh", "-c", "npm run preview -- --host 0.0.0.0 --port ${PORT:-3000}"]
