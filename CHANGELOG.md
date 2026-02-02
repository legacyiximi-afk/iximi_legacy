# Changelog de IXIMI Legacy

Este documento sigue el formato de [Keep a Changelog](https://keepachangelog.com/) y usa [Semantic Versioning](https://semver.org/).

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-02-02

### Añadido

- ✅ Sistema inicial de certificación blockchain para textiles indígenas
- ✅ API REST con Express.js
- ✅ Endpoints de verificación QR
- ✅ Sistema de registro de diseños textiles
- ✅ Dashboard administrativo
- ✅ Página de demostración para reuniones
- ✅ Documentación técnica y de negocio
- ✅ Dockerfile y docker-compose para despliegue
- ✅ Scripts de configuración automatizada
- ✅ Sistema de logging con Winston
- ✅ Métricas con Prometheus
- ✅ Documentación de API con Swagger

### Cambiado

- 🔄 Estructura del proyecto reorganizada para mejor escalabilidad
- 🔄 Configuración de linter actualizada a TypeScript

### Deprecated

- ⚠️ Ninguno

### Eliminado

- ❌ Ninguno

### Corregido

- 🐛 Ninguno (versión inicial)

### Seguridad

- 🔒 Implementación de headers de seguridad con Helmet
- 🔒 Rate limiting configurado
- 🔒 Validación de entrada en todos los endpoints

---

## Formato de Entradas Futuras

### Formato de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[ámbito opcional]: descripción

[ cuerpo opcional ]

[pie(s) opcional(s)]
```

### Tipos de Commits

| Tipo | Descripción |
|------|-------------|
| `feat` | Nueva característica |
| `fix` | Corrección de bug |
| `docs` | Cambios en documentación |
| `style` | Formato de código, punto y coma, etc. |
| `refactor` | Refactorización de código |
| `perf` | Mejoras de rendimiento |
| `test` | Agregar o modificar pruebas |
| `chore` | Tareas de mantenimiento |
| `build` | Cambios en el sistema de build |
| `ci` | Cambios en la configuración de CI |
| `revert` | Revertir un commit anterior |

### Ejemplos

```
feat(api): agregar endpoint de verificación QR
fix(database): corregir conexión a MongoDB
docs(readme): actualizar guía de instalación
refactor(auth): simplificar lógica de JWT
test(user): agregar pruebas unitarias
chore(deps): actualizar dependencias
```

---

## Proceso de Release

1. **Pre-release**: `npm run release:prepare`
2. **Verificación**: Revisión de cambios y pruebas
3. **Publicación**: `npm run release:publish`
4. **Anuncio**: Actualización del changelog y notas de release

---

## Versiones No Mantenidas

Las versiones marcadas como no mantenidas ya no reciben actualizaciones de seguridad ni correcciones de bugs.

| Versión | Estado | Fin de Soporte |
|---------|--------|----------------|
| < 1.0.0 | No mantenida | N/A |

---

*Generado automáticamente. Última actualización: 2025-02-02*
