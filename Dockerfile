# Start from the alpine version of node
FROM node:alpine

# Copy all src files to new directory
COPY . /app

# Enter that directory
WORKDIR /app

# Install dependencies & build
RUN npm install --production && npm run-script build

# Open port
EXPOSE 3001

# Run the program
CMD ["npm", "start"]

# Change user
USER node