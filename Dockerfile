FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if you have one)
COPY package.json pnpm-lock.* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# ====================================
FROM build as release

# Set the command to start the application
CMD ["pnpm", "run", "start"]