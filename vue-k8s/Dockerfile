FROM nginx

USER root

ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /usr/share/nginx/html/css
RUN mkdir -p /usr/share/nginx/html/js

#COPY root.conf /etc/nginx/conf.d
COPY dist/index.html /usr/share/nginx/html
COPY dist/css /usr/share/nginx/html/css
COPY dist/js /usr/share/nginx/html/js


