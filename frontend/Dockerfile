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
COPY src ./src

# Expose port
EXPOSE 5173

CMD ["node", "src/main.jsx"]

