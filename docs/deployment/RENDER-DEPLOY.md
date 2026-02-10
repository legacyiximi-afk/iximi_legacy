p# Deploy en Render - IXIMI Legacy

## Pasos para crear servicio en Render

### 1. Crear cuenta en Render
- Ve a: https://dashboard.render.com
- Regístrate con GitHub

### 2. Crear Web Service
1. Click en **"New +"** → **"Web Service"**
2. Conecta tu GitHub: `legacyiximi-afk/iximi_legacy`
3. Configura:
   - **Name**: `iximi-legacy`
   - **Root Directory**: `.` (dejar vacío)
   - **Build Command**: `npm install`
   - **Start Command**: `node src/index.js`
   - **Plan**: Free (o el que prefieras)

### 3. Variables de Entorno
En la sección **Environment** añade:
```
NODE_ENV=production
JWT_SECRET=genera-un-seguro-con-openssl-rand-hex-32
```

### 4. Deploy
- Click en **"Create Web Service"**
- Render automaticamente hará build y deploy

### 5. Verificar
- URL será: `https://iximi-legacy.onrender.com`
- Endpoint health: `https://iximi-legacy.onrender.com/api/health`

---

## Configuración adicional para Base de Datos (PostgreSQL)

1. En Render Dashboard → **New +** → **PostgreSQL**
2. Selecciona el plan Free
3. Una vez creado, ve a tu Web Service → **Settings** → **Environment**
4. Click en **"Add Database"** y selecciona tu PostgreSQL
5. Esto añadirá automaticamente `DATABASE_URL`

---

## Despliegue automático (Deploy Hook)

Para deploy automático cuando haces push a GitHub:

1. En tu Web Service → **Settings** → **Deploy**
2. Busca **"Deploy Hook"**
3. Click en **"Create"**
4. Copia el URL del hook

### Usar el hook:
```bash
# Añade esto a deploy_master.sh o crea script
curl -X POST "https://api.render.com/deploy/YOUR_HOOK_ID"
```

---

## Comandos útiles

```bash
# Ver logs
railway logs  # (si usas Railway)

# Ver estado
railway status

# Restart
railway restart
```
