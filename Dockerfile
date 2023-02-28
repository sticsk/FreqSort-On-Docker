#Build for amd64
FROM node:14-alpine AS amd64-build

WORKDIR /app

COPY package*.json ./

RUN npm install next react react-dom

COPY . .

RUN npm run build

#Build for arm
FROM arm32v7/node:14-alpine AS arm-build

WORKDIR /app

COPY package*.json ./

RUN npm install next react react-dom

COPY . .

RUN npm run build

#Production 
FROM node:14-alpine AS production

WORKDIR /app

COPY --from=amd64-build /app/.next ./
COPY --from=arm-build /app/.next ./
COPY package*.json ./

RUN npm install --production

EXPOSE 3000

CMD [ "npm", "start" ]

