FROM node:20-slim AS build
COPY . /app
WORKDIR /app
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN npm ci \
  && npm run build

FROM node:lts-alpine
LABEL maintainer "genzouw <genzouw@gmail.com>"
WORKDIR /app
COPY --from=build --chown=node:node /app/.output /app/.output
ENV PORT=8080
EXPOSE 8080
USER node
CMD ["node", "/app/.output/server/index.mjs"]
