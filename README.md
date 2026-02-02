# IXIMI Legacy - Sistema Blockchain para Protección de Textiles Indígenas

## Acerca del Proyecto

IXIMI Legacy es un sistema blockchain innovador desarrollado por **Estefanía Pérez Vázquez** para proteger los diseños textiles indígenas de México mediante tecnología de vanguardia.

### Problema que Resuelve

- **Apropiación cultural masiva**: $2,000 MDP anuales perdidos por comunidades indígenas
- **Falta de certificación oficial**: Diseños copiados sin reconocimiento
- **Cero regalías**: Artesanos no reciben compensación por uso comercial
- **Pérdida del conocimiento ancestral**: Patrimonio cultural en riesgo

### Solución

Sistema Nacional de Certificación Blockchain que combina:
- Registro digital inmutable de diseños
- Certificados con QR verificable en segundos
- Regalías automáticas del 5-15% vía smart contracts
- Plataforma accesible para todas las comunidades

## Impacto Esperado (5 Años)

| Indicador | Meta |
|-----------|------|
| Artesanos protegidos | 500,000 |
| Regalías distribuidas | $500 MDP/año |
| Diseños certificados | 50,000 |
| ROI social | 89:1 |

## Tecnologías

- **Blockchain**: Polygon (Matic) - Layer 2 de Ethereum
- **Backend**: Node.js/Express con TypeScript
- **Base de datos**: PostgreSQL + Redis
- **Arquitectura**: Microservicios con Docker
- **Seguridad**: ISO 27001, GDPR compliant

## Instalación Rápida

```bash
# Clonar repositorio
git clone https://github.com/legacyiximi-afk/iximi_legacy.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Ejecutar pruebas
npm test

# Build para producción
npm run build
```

## Uso

### Iniciar servidor
```bash
npm start
```

### Verificar estado del sistema
```bash
curl http://localhost:3000/api/health
```

### Acceder a la aplicación
- **Frontend**: http://localhost:3000
- **Dashboard**: http://localhost:3000/dashboard
- **Demo Reunión**: http://localhost:3000/demo-meeting

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/health | Estado del sistema |
| GET | /api/project | Información del proyecto |
| GET | /api/demo | Datos de demostración |
| GET | /api/verify/:qrCode | Verificar autenticidad QR |
| POST | /api/register | Registrar nuevo textil |

## Demostración para Reunión

Para la reunión con el exdiputado:

1. Iniciar el servidor: `npm start`
2. Abrir: http://localhost:3000/demo-meeting
3. QR de prueba: `IXIMI-ZAP-001-2024`

## Sobre la Fundadora

**Estefanía Pérez Vázquez**

- Fundadora y Arquitecta Principal
- Desarrollo completo desde mayo 2025
- Autodidacta con formación práctica
- Creó sistema sin apoyo institucional desde teléfono con Termux

## Contacto

- **Email**: legacyiximi@gmail.com
- **GitHub**: @legacyiximi-afk
- **Sitio**: iximilegacy.org (en desarrollo)

---

*"Tecnología que teje justicia para México"*
