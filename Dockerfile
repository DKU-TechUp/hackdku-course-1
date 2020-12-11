# Start from the version of node I have rn
FROM node:latest

# Change to prod
ENV NODE_ENV=production

# Copy all src files to new directory
COPY . /app

# Enter that directory
WORKDIR /app

# Install dependencies & build
RUN npm install --production && npm run-script build

# Open port
EXPOSE 3001

# Run the program (circumvent npm start?)
CMD ["npm", "start"]

# Change user
USER node