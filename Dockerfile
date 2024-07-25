# FROM node:18-alpine AS base

# FROM base AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# ARG NEXT_PUBLIC_URL
# ENV NEXT_PUBLIC_URL=$NEXT_PUBLIC_URL

# # Install dependencies based on the preferred package manager
# COPY package*.json ./
# RUN npm ci

# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# ARG NEXT_PUBLIC_URL
# ENV NEXT_PUBLIC_URL=$NEXT_PUBLIC_URL

# RUN npm install -g npm@10.8.2
# RUN npm install --global yarn

# RUN yarn

# RUN yarn build

# FROM base AS runner
# WORKDIR /app

# ARG NEXT_PUBLIC_URL
# ENV NEXT_PUBLIC_URL=$NEXT_PUBLIC_URL

# ENV NODE_ENV production

# COPY --from=builder /app/public ./public

# RUN mkdir .next

# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# EXPOSE 3000

# RUN yarn start



########

FROM node:18.18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

ARG NEXT_PUBLIC_URL=https://ganga-healthcare-server.onrender.com
ENV NEXT_PUBLIC_URL=https://ganga-healthcare-server.onrender.com

EXPOSE 3000
CMD tail -f /dev/null

# 

# COPY package*.json ./

# RUN yarn

# EXPOSE 3000

# RUN rm -rf .next

# CMD yarn dev