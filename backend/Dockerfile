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

# sh and -c allows another terminal to open so that all three commands run
CMD ["sh", "-c", "npm run test && npm run seed && npm run dev"]