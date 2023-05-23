# Builder image install deps and builds TS
FROM node:18-alpine as builder
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
RUN npm install --ignore-scripts
COPY . ./
RUN npm run build

# Local dev, shared src, node_modules etc
FROM node:18-alpine as dev
WORKDIR /app
COPY . .

# Production build, include only production dependencies
FROM node:18-slim as production
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production --ignore-scripts
COPY --from=builder ["build", "./"]
CMD [ "npm",  "start" ]