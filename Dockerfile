FROM nginx as web
ARG BUILD_DATE
ARG REVISION
ARG VERSION
LABEL created $BUILD_DATE
LABEL version $VERSION
LABEL revision $REVISION
LABEL maintainer "marianovaldez92@protonmail.com"
LABEL url "https://reflej.ar"
LABEL source "git@github.com:reflejar/web.git"
LABEL vendor "Reflejar"
LABEL title "Reflejar web"
LABEL description "Pagina web de Reflejar"
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./web /usr/share/nginx/html
EXPOSE 80