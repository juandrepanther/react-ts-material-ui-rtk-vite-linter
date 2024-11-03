# Development stage
FROM node:18 as development
WORKDIR /usr/src/app
COPY . .
RUN npm install

# Builder stage
FROM development as builder
WORKDIR /usr/src/app
# Build the app with devDependencies still installed from "development" stage
RUN npm run build
# Clear dependencies and reinstall for production (no devDependencies)
RUN rm -rf node_modules
RUN npm ci --ommit:dev


# Production stage
FROM nginx:stable-alpine as production
# Copy our files from the builder stage
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]