# Dockerfile for front end of MERN application

# Dockerfile for client side of mern stack
FROM node:alpine AS builder
	
# Set work directory
WORKDIR /app

# Copy JSON files from current folder into computer
COPY package*.json /.

# Install dependancies
RUN npm install

# copy the remainder of the hosts source code
COPY . .

# Build the app
RUN npm run build

# code below from Mustapha, O. (2024). How to Deploy a Vite React App using Nginx server? - Ouali Mustapha - Medium. [online] Medium. Available at: https://dev-mus.medium.com/how-to-deploy-a-vite-react-app-using-nginx-server-d7190a29d8cd [Accessed 4 May 2025].
FROM nginx:alpine

COPY --from=builder /app/nginx /etc/nginx/conf.d

# Reference please note this code was copied from the following Patel, V. (2024). Guide to Dockerizing and deploying your Vite + React app. [online] Medium. Available at: https://medium.com/@pvasu3658/guide-to-dockerizing-and-deploying-your-vite-react-app-8ed6eaca002e [Accessed 3 May 2025]. In order to get Vite to containerise properly
# Copy the build files from the builder stage to the Nginx web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# This line was not copied
COPY --from=builder /app/public /usr/share/nginx/html/assets/public

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

