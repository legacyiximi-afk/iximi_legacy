# Dockerfile para IXIMI Legacy
# Sistema blockchain para protección de textiles indígenas
# Desarrollado por: Estefanía Pérez Vázquez

# Stage 1: Dependencias
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Builder (compila TypeScript si existe)
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN if [ -f "tsconfig.json" ]; then npm run build; fi

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup -g 1001 -S nodejs
RUN adduser -S iximi -u 1001

# Copiar archivos necesarios
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
# Si existe dist, usar eso, sino usar src
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src ./src
COPY public ./public
COPY docker-entrypoint.sh /

# Crear directorios necesarios
RUN mkdir -p logs uploads && chmod +x /docker-entrypoint.sh

USER iximi

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["/docker-entrypoint.sh"]
