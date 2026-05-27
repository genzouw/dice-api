FROM node AS node
COPY . /app
WORKDIR /app
RUN npm install \
  && npm run generate \
  && find /app/dist -type d \
  | xargs -P0 chmod o+rx \
  && find /app/dist -type f \
  | xargs -P0 chmod o+r

FROM php:7.3.8-apache
LABEL maintainer "genzouw <genzouw@gmail.com>"
RUN a2enmod rewrite \
  && sed -ri 's!Listen 80!Listen 8080!g' /etc/apache2/ports.conf \
  && sed -ri 's!:80>!:8080>!g' /etc/apache2/sites-available/000-default.conf \
  && mkdir -p /var/run/apache2 /var/log/apache2 /var/lock/apache2 \
  && chown -hR www-data:www-data /var/run/apache2 /var/log/apache2 /var/lock/apache2 /var/www/html
COPY --from=node --chown=www-data:www-data /app/dist/ /var/www/html/
EXPOSE 8080
USER www-data
