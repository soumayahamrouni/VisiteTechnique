FROM nginx:1.13.3-alpine

RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/ .

CMD ["nginx", "-g", "daemon off;"]