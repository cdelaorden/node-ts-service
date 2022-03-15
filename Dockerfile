# Builder image install deps and builds TS
FROM node:16 as builder
COPY ["package.json", "package-lock.json"]
RUN npm install
RUN npm run build

# Local dev, shared src, node_modules etc
FROM node:16 as dev
WORKDIR /app
COPY . .

# Production build, include only production dependencies
FROM node:16 as production
WORKDIR /app
RUN npm install --production
COPY --from=builder ["build", "."]
CMD node index.js