FROM node AS build
COPY . /app
WORKDIR /app
RUN npm ci \
  && npm run build \
  && find /app/.output -type d \
  | xargs -P0 chmod o+rx \
  && find /app/.output -type f \
  | xargs -P0 chmod o+r

FROM node:lts-alpine
LABEL maintainer "genzouw <genzouw@gmail.com>"
WORKDIR /app
COPY --from=build /app/.output /app/.output
ENV PORT=8080
EXPOSE 8080
USER node
CMD ["node", "/app/.output/server/index.mjs"]
