FROM node:lts-alpine as build-stage

WORKDIR /projects/github/react-auth
COPY . .
RUN npm install \
  && npm run build \
  && rm -rf node_modules

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /projects/github/react-auth/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# Сборка образа
# sudo docker build -t react-auth .

# Запуск образа
# sudo docker run -p 3000:80 react-auth
