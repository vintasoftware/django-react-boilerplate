FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app/

# Copy lock file and package.json
ADD pnpm-lock.yaml package.json /app/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
ADD . /app/

CMD ["pnpm", "run", "dev"]
