FROM node:22-alpine

WORKDIR /app/
ADD package.json pnpm-lock.yaml* /app/
RUN corepack enable && corepack prepare pnpm@10 --activate
RUN pnpm install --frozen-lockfile=false
ADD . /app/

CMD ["pnpm", "run", "dev"]
