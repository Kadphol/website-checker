FROM node:17-alpine3.14 as dev
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package*.json .
RUN npm install
# Copy app files
COPY . .
# Run Test
RUN npm test
# Expose port
EXPOSE 8080
# Start the app
CMD [ "npm", "start" ]