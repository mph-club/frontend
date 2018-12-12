FROM node:alpine as builder
WORKDIR '/app'
COPY . .
RUN set -x \
 && npm install \
 && npm run build

FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
