# Deploy en Railway - IXIMI Legacy

## 🚀 Pasos para desplegar en Railway

### Prerrequisitos
1. Cuenta en [Railway.app](https://railway.app)
2. Repositorio GitHub conectado a Railway

### Paso 1: Conectar repositorio
1. Inicia sesión en [Railway](https://railway.app)
2. Crea un nuevo proyecto
3. Conecta tu repositorio: `legacyiximi-afk/iximi_legacy`

### Paso 2: Configurar servicios
Railway detectará automáticamente el `Dockerfile` y `railway.json`.

#### Servicio Principal (App)
- **Build Command**: Detected from Dockerfile
- **Start Command**: `node src/index.js`
- **Health Check**: `/api/health`

#### Base de Datos (PostgreSQL)
1. En Railway, añade un servicio PostgreSQL
2. Copia la variable `DATABASE_URL` generada
3. Añádela a las variables de entorno del proyecto

#### Redis (Opcional)
1. Añade un servicio Redis en Railway
2. Copia la variable `REDIS_URL`
3. Añádela a las variables de entorno

### Paso 3: Variables de Entorno
En la sección "Variables" del proyecto, añade:

```env
NODE_ENV=production
BLOCKCHAIN_NETWORK=polygon-mainnet
JWT_SECRET=your_secure_random_string
```

### Paso 4: Deploy
1. Haz click en "Deploy Now"
2. Railway construirá la imagen Docker automáticamente
3. Espera a que el deploy termine (5-10 minutos)

### Paso 5: Verificar
Una vez completado, Railway mostrará la URL de tu app:
- `https://iximi-legacy.up.railway.app`
- Health Check: `https://iximi-legacy.up.railway.app/api/health`

## 📁 Archivos de Configuración

| Archivo | Propósito |
|---------|-----------|
| `Dockerfile` | Definición de imagen Docker |
| `railway.json` | Configuración de Railway |
| `.env.example` | Plantilla de variables de entorno |

## 🔧 Comandos Útiles

```bash
# Deploy desde CLI
npm install -g @railway/cli
railway login
railway init
railway up

# Ver logs
railway logs

# Variables de entorno
railway variables
```

## 🐛 Solución de Problemas

### Error: Puerto ya en uso
Asegúrate de que `PORT` esté configurado o usa el que Railway asigna.

### Error: Base de datos no conectada
Verifica que `DATABASE_URL` esté configurada correctamente en las variables.

### Build fallido
Revisa los logs de build en el dashboard de Railway.

## 📞 Recursos
- [Documentación de Railway](https://docs.railway.app)
- [Soporte de Railway](https://discord.gg/railway)

---

Desarrollado por: Estefanía Pérez Vázquez 🐙
