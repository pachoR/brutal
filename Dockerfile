# ================================
# Etapa 1 — Build de la app React
FROM node:18-alpine AS builder
WORKDIR /app

# Copia los archivos de dependencias primero para aprovechar cache de Docker
COPY package.json package-lock.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Build de producción: genera los archivos estáticos en /app/build
RUN npm run build

# =====================================
# Etapa 2 — Servir la app con Nginx
# =====================================
FROM nginx:alpine

# Copia los archivos build desde la etapa "builder" hacia la carpeta pública de nginx
COPY --from=builder /app/build /usr/share/nginx/html

# (Opcional) Si tienes configuración especial de rutas en React (history / SPA), puedes copiar un nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 (HTTP)
EXPOSE 80

# Comando por defecto al iniciar el contenedor
CMD ["nginx", "-g", "daemon off;"]