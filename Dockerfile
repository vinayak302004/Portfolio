# Use the official Nginx image
FROM nginx:alpine

# Copy your HTML/CSS/JS files into the default Nginx public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx runs by default, no need for CMD
