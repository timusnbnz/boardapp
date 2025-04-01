FROM node

WORKDIR /app

COPY ../../dist/apps/backend ./dist
COPY ../../package.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/apps/backend/main"]