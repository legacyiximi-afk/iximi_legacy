# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [2.0.0] - 2026-02-15

### 🎉 Lanzamiento Inicial de la Versión Profesional

Esta es la primera versión profesional de IXIMI Legacy, completamente reescrita con TypeScript y siguiendo principios de Clean Architecture.

### ✨ Agregado

-   **Arquitectura Profesional**: Monorepo con `npm workspaces`, Clean Architecture y Arquitectura Hexagonal.
-   **Backend TypeScript**: API RESTful con Node.js, Express, TypeScript y Prisma.
-   **Base de Datos**: Esquema de Prisma con modelos para Users, Communities, Artifacts y Narratives.
-   **Validación de Tipos**: TypeScript en modo strict con cobertura completa.
-   **Testing**: Configuración de Jest con tests unitarios de ejemplo.
-   **Docker**: Docker Compose para desarrollo local con PostgreSQL.
-   **CI/CD**: GitHub Actions con pipelines de CI, CD y seguridad.
-   **Linting & Formatting**: ESLint y Prettier configurados con pre-commit hooks (Husky).
-   **Documentación Profesional**: README multilingüe (ES/EN), CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md.
-   **Plantillas de GitHub**: Templates para Issues y Pull Requests.
-   **CODEOWNERS**: Asignación automática de revisores.

### 🔧 Mejorado

-   **Estructura de Proyecto**: Reorganización completa siguiendo mejores prácticas de la industria.
-   **Seguridad**: Implementación de Helmet.js, CORS configurado, validación de entrada con Zod.
-   **Escalabilidad**: Arquitectura preparada para crecimiento horizontal y vertical.

### 📝 Documentado

-   README de alto impacto con badges, características clave y guía de inicio rápido.
-   Guía de contribución detallada con flujo de trabajo y estándares de commits.
-   Política de seguridad con proceso de reporte de vulnerabilidades.
-   Código de conducta basado en Contributor Covenant 2.0.

---

## [1.0.0] - 2025-XX-XX

### 🌱 Versión Original

-   Desarrollo inicial en Termux con Node.js y Handlebars.
-   Páginas básicas: Inicio, Dashboard, Manifiesto, Fundadora.
-   Integración de lenguas originarias (Diidzaxa, Ñuu Savi, Didxazap).
-   Script de instalación automática para Termux.

---

[2.0.0]: https://github.com/legacyiximi-afk/iximi_legacy/releases/tag/v2.0.0
[1.0.0]: https://github.com/legacyiximi-afk/iximi_legacy/releases/tag/v1.0.0
