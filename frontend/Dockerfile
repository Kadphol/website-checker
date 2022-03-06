FROM node:17-alpine3.14 as dev
ENV NODE_ENV dev
# Add work directory
WORKDIR /app
# Cache and Install dependencies
COPY package*.json .
RUN npm install
# Copy app files
COPY . .
# Run test
RUN npm test
# Expose port
EXPOSE 3000
# Start App
CMD ["npm", "start"]
