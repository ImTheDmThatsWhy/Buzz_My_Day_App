# Dockerfile for front end of MERN application

# Dockerfile for client side of mern stack
FROM node:alpine
	
# Set work directory
WORKDIR /app

# Copy JSON files from current folder into computer
COPY package*.json /.

# Install dependancies
RUN npm install

# copy the remainder of the hosts source code
COPY . .

# Expose the port
EXPOSE 3000

CMD ["sh", "-c", "npm run seed && node source/index.js"]