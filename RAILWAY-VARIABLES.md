# Variables de Entorno para Railway - IXIMI Legacy

## Configuración en el Dashboard de Railway

1. Ve a tu proyecto en Railway
2. Click en "Variables" (Variables tab)
3. Añade las siguientes variables:

---

## 🔴 REQUERIDAS

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Entorno de producción |
| `JWT_SECRET` | `[Generar secreto seguro]` | Clave para tokens JWT |

---

## 🟡 BLOCKCHAIN (Opcional)

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `BLOCKCHAIN_NETWORK` | `polygon-mainnet` | Red blockchain |
| `PRIVATE_KEY` | `[Tu private key]` | Clave de tu wallet |
| `CONTRACT_ADDRESS` | `[Dirección del contrato]` | Dirección del smart contract |

---

## 🔵 OPCIONALES

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `LOG_LEVEL` | `info` | Nivel de logs |
| `METRICS_ENABLED` | `true` | Habilitar métricas |
| `CORS_ORIGIN` | `*` o tu dominio | Origen CORS |

---

## 🟢 GENERADAS AUTOMÁTICAMENTE

Railway genera estas automáticamente cuando añades plugins:

| Variable | Plugin | Descripción |
|----------|--------|-------------|
| `DATABASE_URL` | PostgreSQL | Conexión a base de datos |
| `REDIS_URL` | Redis | Conexión a Redis |

---

## ⚠️ IMPORTANTE

- **NUNCA** expongas `PRIVATE_KEY` o `JWT_SECRET` en código público
- Usa el generador de Railway para secretos seguros
- regenera secrets si se comprometen

---

## 🔧 Generar JWT_SECRET

```bash
# En terminal
openssl rand -hex 32
```

O usa: https://generate-random.org/hex-string?length=32
