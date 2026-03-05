# 🎯 REUNIÓN CON LIC. DANIEL GUTIÉRREZ
## IXIMI Legacy - Demo del Sistema
### 📅 Viernes 7 de Febrero

---

## 🌐 ENLACES PRINCIPALES

| Endpoint | Descripción | URL |
|----------|-------------|-----|
| Dashboard | Panel de control principal | https://iximilegacy-production-63f8.up.railway.app/dashboard |
| Demo Meeting | Vista de demostración | https://iximilegacy-production-63f8.up.railway.app/demo-meeting |
| Health Check | Estado del sistema | https://iximilegacy-production-63f8.up.railway.app/health |
| API Project | Información del proyecto | https://iximilegacy-production-63f8.up.railway.app/api/project |

---

## 🗣️ GUIÓN DE PRESENTACIÓN (15 minutos)

### 0:00 - Saludo y Contexto (2 min)
> "Buenos días Lic. Gutiérrez, gracias por recibirme. Soy Estefanía Pérez Vázquez, fundadora de IXIMI Legacy."

**Slide de contexto:**
- Problema: Desaparición de patrimonio cultural oaxaqueño
- Solución: Registro blockchain inmutable
- Impacto: 42 artefactos, 8 comunidades, 156 QR generados

---

### 2:00 - Mostrar Dashboard (3 min)
> "Lo primero que vemos es nuestro dashboard en tiempo real."

**Demostrar:**
1. Entrar a `/dashboard`
2. Mostrar métricas:
   - Artefactos registrados: 42
   - Comunidades: 8
   - Transacciones blockchain: 89

---

### 5:00 - Flujo Completo: Registrar Artefacto (5 min)
> "Ahora le voy a mostrar el flujo completo de registro."

**Paso 1: API de registro**
```bash
POST /api/artifacts
{
  "qr_code": "TEXTIL-OAX-001",
  "name": "Tapiz del Águila y el Jaguar",
  "artisan_name": "Familia Mendoza",
  "community": "Teotitlán del Valle",
  "cultural_significance": "Simbolismo prehispánico"
}
```

**Paso 2: Mostrar respuesta**
- QR único generado
- Transacción blockchain: `0x7f3...9a2`

**Paso 3: Verificar artefacto**
```bash
GET /api/verify/TEXTIL-OAX-001
```
- Muestra datos completos
-区块链 transacción verificable

---

### 10:00 - Casos de Éxito en Oaxaca (3 min)
> "Estos son ejemplos reales de artefactos que podemos proteger."

| Artefacto | Comunidad | Técnica |
|-----------|-----------|---------|
| Tapiz del Águila y el Jaguar | Teotitlán del Valle | Textil zapoteco |
| Vasija de la Luna | San Bartolo Coyotepec | Barro negro bruñido |
| Dragón-Serpiente | San Martín Tilcajete | Alebrije tradicional |

---

### 13:00 - Próximos Pasos y Cierre (2 min)
> "Para escalar este proyecto necesitamos..."

**Próximos pasos:**
1. ☐ Conectar PostgreSQL en Railway (listo)
2. ☐ Integrar más comunidades (5 más en proceso)
3. ☐ Partnership con Fonart
4. ☐ App móvil para artesanos

**Contacto:**
- Email: legacyiximi@gmail.com
- GitHub: https://github.com/legacyiximi-afk/iximi_legacy
- Web: https://iximilegacy.org

---

## 📊 ESTADÍSTICAS CLAVE PARA MENCIONAR

- **42** artefactos registrados
- **8** comunidades oaxaqueñas activas
- **156** QR únicos generados
- **89** transacciones blockchain
- **23** usuarios activos

---

## 🔧 DATOS TÉCNICOS (si pregunta)

- **Stack:** Node.js + Express + PostgreSQL
- **Deploy:** Railway (Docker)
- **Blockchain:** Ethereum (testnet)
- **API:** RESTful con endpoints documentados
- **Escalabilidad:** Horizontal con Redis

---

## ✅ CHECKLIST ANTES DE LA REUNIÓN

- [ ] Verificar que Railway está activo
- [ ] Probar endpoints `/health` y `/dashboard`
- [ ] Preparar laptop con internet
- [ ] Tener listo el teléfono para mostrar código QR real
- [ ] Backup: tener screenshots listos por si falla internet

---

**¡Éxito en la reunión! 🎉**
