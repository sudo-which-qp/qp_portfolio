# STAGE 1: Build the application
FROM node:24.11-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
COPY . .
RUN pnpm clean --lockfile
RUN pnpm install
RUN pnpm run build

# STAGE 2: Production server
FROM nginx:alpine AS production

# Remove the default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]