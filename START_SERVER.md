# 🚀 IXIMI Legacy - Comandos para Iniciar el Servidor

## 📦 Instalación de Dependencias

```bash
npm install
```

---

## 🔧 Desarrollo (con reload automático)

```bash
npm run dev
```

---

## 🏭 Producción

```bash
npm start
```

---

## 🐳 Docker Compose (App + PostgreSQL + Redis)

```bash
docker-compose up -d
```

---

## 🚂 Railway (Producción en la nube)

```bash
# Requiere: railway CLI instalado y login
railway up
```

---

## 📡 Verificar que el Servidor está Ejecutando

```bash
curl http://localhost:3000/health
```

Respuesta esperada:
```json
{"status":"healthy","service":"IXIMI Legacy API","version":"1.0.0"}
```

---

## 🌐 URLs de Acceso

| Entorno | URL |
|---------|-----|
| Local | http://localhost:3000 |
| Railway | https://iximilegacy-production-63f8.up.railway.app |

---

## 🔑 Endpoints Principales

| Endpoint | Descripción |
|----------|-------------|
| `GET /health` | Health check |
| `GET /api/project` | Info del proyecto |
| `GET /api/statistics` | Estadísticas |
| `GET /dashboard` | Dashboard |
| `GET /demo-meeting` | Demo meeting |
| `GET /api/verify/:qrCode` | Verificar QR |
| `POST /api/artifacts` | Registrar artefacto |

---

## ⏹️ Detener el Servidor

```bash
# Si está en terminal interactiva
Ctrl+C
```

---

## 📋 Resumen Rápido

```bash
# 1. Instalar
npm install

# 2. Iniciar
npm start

# 3. Verificar
curl http://localhost:3000/health
```

¡Listo! El servidor estará disponible en http://localhost:3000
