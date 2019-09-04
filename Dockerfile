FROM node:alpine
WORKDIR /projects/github/react-auth
EXPOSE 3000
COPY ./ ./
RUN npm install
CMD ["npm", "start"]
