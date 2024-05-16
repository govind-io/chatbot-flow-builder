FROM node:18-alpine
WORKDIR /usr/src
RUN apk update && npm install pm2 -g && npm install pnpm@8 -g
COPY ./package.json /usr/src 
RUN pnpm install
COPY ./ /usr/src/
RUN pnpm run build
EXPOSE 3000
CMD ["sh", "-c", "pm2-runtime pnpm --name 'chatbot-flow-builder' -- start"]
