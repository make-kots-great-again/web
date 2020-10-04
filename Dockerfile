# ---- Base Node ----
FROM node:14.10.1-alpine3.10 AS base
# Create app directory
WORKDIR /home/kotsApp

# ---- Dependencies ----
FROM base AS dependencies
# Copy the package.json file
COPY package.json .
# install app dependencies including 'devDependencies'
RUN npm install

# ---- Copy Files/Build ----
FROM dependencies AS build
WORKDIR /home/kotsApp
COPY . .

# --- Release with Alpine ----
FROM base AS release
# Create app directory
WORKDIR /home/kotsApp
# Copy prod dependencies
COPY --from=dependencies /home/kotsApp/package.json .
# Install app dependencies
RUN npm install

COPY --from=build /home/kotsApp .

# Expose port and cmd
EXPOSE 8000

CMD [ "npm", "run", "start:dev"]
