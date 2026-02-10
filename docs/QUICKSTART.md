# 🚀 IXIMI LEGACY - Guía de Inicio Rápido

## 📋 Estructura del Proyecto

```
iximi_legacy/
├── src/
│   ├── index.js           # API principal (Express)
│   └── index.pg.js        # API con PostgreSQL
├── scripts/
│   ├── deploy/
│   │   └── production.js # Deployment a producción
│   ├── demo/
│   │   └── record-video.sh
│   └── setup-clean-workspace.sh
├── docs/
│   ├── deployment/
│   │   ├── RAILWAY-DEPLOY.md
│   │   └── RENDER-DEPLOY.md
│   ├── technical/
│   │   └── architecture.md
│   └── QUICKSTART.md      # ← ESTE ARCHIVO
├── public/
│   ├── dashboard.html     # Dashboard web
│   ├── demo-meeting.html  # Página de demostración
│   └── index.html         # Página principal
├── config/
│   └── database.js        # Configuración de BD
├── deploy_complete_api.sh # ⭐ DEPLOY A RAILWAY
├── verify_api.sh          # ⭐ VERIFICACIÓN DE ENDPOINTS
├── railway.json           # ⭐ CONFIGURACIÓN RAILWAY
├── Dockerfile             # ⭐ CONTENEDOR DOCKER
└── package.json           # ⭐ DEPENDENCIAS
```

## 🎯 Comandos Esenciales

### 1. Verificar el entorno
```bash
./deploy_complete_api.sh
```

### 2. Verificar endpoints después del deploy
```bash
./verify_api.sh
```

### 3. Deploy a Railway
```bash
git add .
git commit -m "feat: Descripción del cambio"
git push origin main
# Railway detecta automáticamente y hace deploy
```

### 4. Deploy manual en Railway
1. Ir a: https://railway.app/project/iximilegacy-production-63f8
2. Hacer clic en "Manual Deploy"

## 🔗 URLs Importantes

| Entorno | URL |
|---------|-----|
| **Producción (Railway)** | https://iximilegacy-production-63f8.up.railway.app |
| **GitHub** | https://github.com/legacyiximi-afk/iximi_legacy |
| **Health Check** | https://iximilegacy-production-63f8.up.railway.app/api/health |

## 📡 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/health` | Health check (Railway) |
| GET | `/api/project` | Información del proyecto |
| GET | `/api/demo` | Datos de demostración |
| GET | `/api/verify/:qrCode` | Verificación QR |
| POST | `/api/register` | Registro de artefactos |
| GET | `/dashboard` | Dashboard web |
| GET | `/demo-meeting` | Página de demostración |

## 🏗️ Deployment en Railway

### Requisitos verificados:
- ✅ `railway.json` con `healthcheckPath: "/api/health"`
- ✅ `Dockerfile` con `CMD ["node", "src/index.js"]`
- ✅ Puerto: 3000 (definido en `src/index.js`)
- ✅ Dependencias: Express configurado en `package.json`

### Pasos para deploy:
1. Hacer cambios en el código
2. Ejecutar `./deploy_complete_api.sh` para verificar
3. Commit y push a GitHub
4. Railway detecta los cambios automáticamente
5. Verificar con `./verify_api.sh`

## 🧪 Verificación Local

Para probar la API localmente:

```bash
# Instalar dependencias
npm install

# Iniciar servidor
npm start

# Probar health check
curl http://localhost:3000/api/health

# Probar otros endpoints
curl http://localhost:3000/api/project
curl http://localhost:3000/api/demo
```

## 📱 Contacto

- **Estefanía Pérez Vázquez**
- **Email:** legacyiximi@gmail.com
- **Teléfono:** 951-743-92-04

---

**Versión:** 2.0.0  
**Última actualización:** 2026-02-10  
**Estado:** 🟢 Producción Ready
