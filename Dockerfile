FROM node:14-alpine
WORKDIR D:/NextJS/opt
ADD package.json package.json
RUN npm install
ADD . .
ENV NODE_ENV roduction
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000
