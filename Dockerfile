# Stage 1: Build the React app
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built app with Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Copy a custom Nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
