# 🧵 IXIMI Legacy - Sistema Blockchain para Protección de Textiles Indígenas

[![GitHub stars](https://img.shields.io/github/stars/legacyiximi-afk/iximi_legacy?style=flat-square)](https://github.com/legacyiximi-afk/iximi_legacy/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/legacyiximi-afk/iximi_legacy?style=flat-square)](https://github.com/legacyiximi-afk/iximi_legacy/network)
[![GitHub issues](https://img.shields.io/github/issues/legacyiximi-afk/iximi_legacy?style=flat-square)](https://github.com/legacyiximi-afk/iximi_legacy/issues)
[![GitHub license](https://img.shields.io/github/license/legacyiximi-afk/iximi_legacy?style=flat-square)](https://github.com/legacyiximi-afk/iximi_legacy/blob/main/LICENSE)
[![Node.js](https://img.shields.io/node/v/iximi-legacy?style=flat-square)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/docker-ready-blue?style=flat-square)](https://docker.com/)

[![CI/CD](https://img.shields.io/github/actions/workflow/status/legacyiximi-afk/iximi_legacy/ci.yml?branch=main&style=flat-square)](https://github.com/legacyiximi-afk/iximi_legacy/actions)
[![Coverage](https://img.shields.io/codecov/c/github/legacyiximi-afk/iximi_legacy?style=flat-square)](https://codecov.io/)
[![Security](https://img.shields.io/snyk/vulnerabilities/github/legacyiximi-afk/iximi_legacy?style=flat-square)](https://snyk.io/)

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Problema que Resuelve](#problema-que-resuelve)
- [Solución](#solución)
- [Impacto Esperado](#impacto-esperado-5-años)
- [Tecnologías](#tecnologías)
- [Instalación Rápida](#instalación-rápida)
- [Configuración](#configuración)
- [Uso](#uso)
- [API Endpoints](#api-endpoints)
- [Demostración](#demostración-para-reunión)
- [Contribución](#contribución)
- [Seguridad](#seguridad)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Acerca del Proyecto

IXIMI Legacy es un sistema blockchain innovador desarrollado por **Estefanía Pérez Vázquez** para proteger los diseños textiles indígenas de México mediante tecnología de vanguardia.

### Misión

> *"Tecnología que teje justicia para México"*

### Visión

Crear un ecosistema digital que proteja, certifique y valore el patrimonio textile indígena mexicano, asegurando que las comunidades creativas reciban la compensación y reconocimiento que merecen.

### Valores

| Valor | Descripción |
|-------|-------------|
| 🌍 **Respeto Cultural** | Preservación y honra del patrimonio indígena |
| 🔐 **Transparencia** | Sistema abierto y verificable |
| 🤝 **Comunidad** | Empoweramiento de artesanos |
| 💡 **Innovación** | Tecnología de vanguardia |
| ⚖️ **Justicia** | Compensación justa y regalías |

---

## Problema que Resuelve

- **Apropiación cultural masiva**: $2,000 MDP anuales perdidos por comunidades indígenas
- **Falta de certificación oficial**: Diseños copiados sin reconocimiento
- **Cero regalías**: Artesanos no reciben compensación por uso comercial
- **Pérdida del conocimiento ancestral**: Patrimonio cultural en riesgo

---

## Solución

Sistema Nacional de Certificación Blockchain que combina:

- 📝 Registro digital inmutable de diseños
- 🔍 Certificados con QR verificable en segundos
- 💰 Regalías automáticas del 5-15% vía smart contracts
- 🌐 Plataforma accesible para todas las comunidades
- 🛡️ Protección legal y certificación oficial

---

## Impacto Esperado (5 Años)

| Indicador | Meta |
|-----------|------|
| Artesanos protegidos | 500,000 |
| Regalías distribuidas | $500 MDP/año |
| Diseños certificados | 50,000 |
| ROI social | 89:1 |
| Comunidades activas | 1,000+ |

---

## Tecnologías

### Backend

| Tecnología | Propósito |
|------------|-----------|
| **Node.js** | Entorno de ejecución |
| **Express.js** | Framework web |
| **TypeScript** | Tipado estático |
| **MongoDB** | Base de datos principal |
| **Redis** | Cache y sesiones |

### Blockchain

| Tecnología | Propósito |
|------------|-----------|
| **Polygon (Matic)** | Layer 2 de Ethereum |
| **Ethers.js** | Biblioteca Web3 |
| **Smart Contracts** | Regalías automáticas |

### DevOps

| Tecnología | Propósito |
|------------|-----------|
| **Docker** | Contenedorización |
| **GitHub Actions** | CI/CD |
| **Nginx** | Servidor web |

### Seguridad

| Estándar | Descripción |
|----------|-------------|
| **ISO 27001** | Gestión de seguridad |
| **GDPR** | Protección de datos |
| **OWASP** | Mejores prácticas |

---

## Instalación Rápida

```bash
# Clonar repositorio
git clone https://github.com/legacyiximi-afk/iximi_legacy.git

# Entrar al directorio
cd iximi_legacy

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev

# Ejecutar pruebas
npm test

# Build para producción
npm run build
```

### Con Docker

```bash
# Build de la imagen
docker build -t iximi-legacy .

# Ejecutar contenedor
docker run -p 3000:3000 iximi-legacy
```

### Con Docker Compose

```bash
docker-compose up -d
```

---

## Configuración

### Variables de Entorno

Copia el archivo `.env.example` a `.env` y configura las siguientes variables:

```env
# Servidor
NODE_ENV=development
PORT=3000

# Base de datos
MONGODB_URI=mongodb://localhost:27017/iximi_legacy
REDIS_URL=redis://localhost:6379

# Seguridad
JWT_SECRET=tu-secreto-jwt
```

Ver [.env.example](.env.example) para todas las variables disponibles.

---

## Uso

### Iniciar servidor

```bash
# Desarrollo
npm run dev

# Producción
npm start
```

### Verificar estado del sistema

```bash
curl http://localhost:3000/api/health
```

### Acceder a la aplicación

| Entorno | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Dashboard | http://localhost:3000/dashboard |
| API Docs | http://localhost:3000/api-docs |
| Demo Reunión | http://localhost:3000/demo-meeting |

---

## API Endpoints

### Endpoints Principales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/health` | Estado del sistema |
| GET | `/api/project` | Información del proyecto |
| GET | `/api/demo` | Datos de demostración |
| GET | `/api/verify/:qrCode` | Verificar autenticidad QR |
| POST | `/api/register` | Registrar nuevo textil |

### Documentación Completa

La documentación completa de la API está disponible en `/api-docs` cuando el servidor está ejecutándose.

---

## Demostración para Reunión

Para la reunión con el exdiputado:

1. Iniciar el servidor: `npm start`
2. Abrir: http://localhost:3000/demo-meeting
3. QR de prueba: `IXIMI-ZAP-001-2024`

---

## Contribución

¡Gracias por tu interés en contribuir! Por favor lee nuestra [Guía de Contribuciones](CONTRIBUTING.md) para detalles sobre nuestro código de conducta y el proceso para enviarnos pull requests.

### Cómo Contribuir

1. Haz fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

---

## Seguridad

Para reportar vulnerabilidades de seguridad, por favor lee nuestra [Política de Seguridad](SECURITY.md).

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

## Sobre la Fundadora

**Estefanía Pérez Vázquez**

- Fundadora y Arquitecta Principal
- Desarrollo completo desde mayo 2025
- Autodidacta con formación práctica
- Creó sistema sin apoyo institucional desde teléfono con Termux

---

## Contacto

| Canal | Información |
|-------|-------------|
| **Email** | legacyiximi@gmail.com |
| **GitHub** | @legacyiximi-afk |
| **Sitio** | iximilegacy.org (en desarrollo) |
| **Seguridad** | security@iximilegacy.org |

---

## Agradecimientos

- A las comunidades indígenas de México por su confianza
- A los artesanos que preservan nuestra cultura
- A los contribuidores de código abierto
- A todos los que creen en este proyecto

---

<div align="center">

*Tecnología que teje justicia para México*

**🧵 IXIMI Legacy**

</div>*
