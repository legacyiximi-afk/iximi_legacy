# Guía de Contribuciones para IXIMI Legacy

¡Gracias por tu interés en contribuir a IXIMI Legacy! Esta guía detalla cómo puedes participar en el desarrollo de este proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Configuración del Entorno](#configuración-del-entorno)
- [Estándares de Código](#estándares-de-código)
- [Documentación](#documentación)
- [Reportar Bugs](#reportar-bugs)
- [Solicitar Mejoras](#solicitar-mejoras)

## Código de Conducta

Este proyecto adhere al [Código de Conducta](CODE_OF_CONDUCT.md) de IXIMI Legacy. Al participar, se espera que respetes este código.

## Cómo Contribuir

Hay muchas formas de contribuir a IXIMI Legacy:

- 🐛 **Reportar Bugs**: Encuentra y reporta problemas
- 💡 **Proponer Mejoras**: Sugiere nuevas funcionalidades
- 📝 **Mejorar Documentación**: Corrige o añade documentación
- 🔧 **Escribir Código**: Implementa nuevas características
- 🧪 **Probar**: Ayuda a verificar cambios
- 🌐 **Traducir**: Haz el proyecto accesible en otros idiomas
- 📢 **Difundir**: Comparte el proyecto con otros

## Flujo de Trabajo

### 1. Fork del Repositorio

```bash
# Haz fork del repositorio en GitHub
# Luego clona tu fork localmente
git clone https://github.com/TU_USUARIO/iximi_legacy.git
cd iximi_legacy
```

### 2. Configurar Remotos

```bash
# Añade el repositorio original como remoto
git remote add upstream https://github.com/legacyiximi-afk/iximi_legacy.git
```

### 3. Crear Rama

```bash
# Actualiza tu rama principal
git checkout main
git pull upstream main

# Crea una nueva rama para tu contribución
git checkout -b feature/nueva-funcionalidad
# O para bug fixes:
git checkout -b fix/corregir-bug
```

### 4. Realizar Cambios

```bash
# Haz tus cambios y verifica que pasen las pruebas
npm test

# Ejecuta el linter
npm run lint

# Verifica el formato del código
npm run format
```

### 5. Commit

```
feat: agregar nueva funcionalidad de verificación QR
fix: corregir error en el endpoint de salud
docs: actualizar guía de instalación
style: corregir formato de código
refactor: mejorar rendimiento del contrato inteligente
test: agregar pruebas para módulo de usuarios
chore: actualizar dependencias
```

### 6. Pull Request

```bash
# Sube tu rama a tu fork
git push origin feature/nueva-funcionalidad

# Crea un Pull Request desde GitHub
# Asegúrate de seguir la plantilla de PR
```

## Configuración del Entorno

### Requisitos Previos

- Node.js >= 18.0.0
- NPM >= 9.0.0
- Git
- Docker (opcional)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/legacyiximi-afk/iximi_legacy.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

### Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```env
# Servidor
PORT=3000
NODE_ENV=development

# Base de datos
MONGODB_URI=mongodb://localhost:27017/iximi
REDIS_URL=redis://localhost:6379

# Blockchain
POLYGON_RPC_URL=https://polygon-rpc.com
PRIVATE_KEY=tu_clave_privada

# JWT
JWT_SECRET=tu_secreto_jwt
JWT_EXPIRES_IN=7d

# Otras
API_RATE_LIMIT_WINDOW_MS=900000
API_RATE_LIMIT_MAX_REQUESTS=100
```

## Estándares de Código

### JavaScript/TypeScript

- Usar **TypeScript** para todo el código nuevo
- Seguir las reglas de **ESLint** configuradas
- Usar **Prettier** para formato de código
- Preferir `const` sobre `let`, evitar `var`
- Usar **funciones flecha** cuando sea apropiado
- Usar **async/await** sobre callbacks

### Estructura de Archivos

```
src/
├── api/          # Controladores y rutas
├── blockchain/   # Contratos inteligentes
├── config/       # Configuraciones
├── middleware/   # Middleware de Express
├── models/       # Modelos de datos
├── utils/        # Utilidades
└── index.js      # Punto de entrada
```

### Convenciones de Nombres

- **Archivos**: camelCase (ej. `userController.js`)
- **Clases**: PascalCase (ej. `BlockchainService`)
- **Constantes**: UPPER_SNAKE_CASE (ej. `MAX_RETRIES`)
- **Funciones**: camelCase (ej. `getUserById`)

### Comentarios

- Usar **JSDoc** para funciones públicas
- Comentar código complejo
- Evitar comentarios obvios
- Mantener comentarios actualizados

## Documentación

### Actualizar Documentación

Si tu cambio afecta la documentación:

1. Actualiza los archivos en `docs/`
2. Añade ejemplos si es necesario
3. Verifica que los enlaces funcionen
4. Actualiza el README si es necesario

### Generar Documentación de API

```bash
# La documentación de API se genera automáticamente
npm run generate:docs
```

## Reportar Bugs

Antes de reportar un bug, verifica:

1. Que el bug no haya sido reportado antes
2. Que estés usando la última versión
3. Que el bug sea reproducible

Usa la [plantilla de bug report](.github/ISSUE_TEMPLATE/bug_report.md) para reportar.

## Solicitar Mejoras

¿Tienes una idea para mejorar IXIMI Legacy?

1. Revisa los issues existentes
2. Considera si la mejora se alinea con los objetivos del proyecto
3. Usa la [plantilla de feature request](.github/ISSUE_TEMPLATE/feature_request.md)

## 🎯 Prioridades del Proyecto

El proyecto IXIMI Legacy tiene un enfoque específico en la **protección de textiles indígenas mexicanos**. Las contribuciones que se alineen con este objetivo serán priorizadas.

### Áreas de Enfoque

- 🔐 **Seguridad**: Mejora de la seguridad del sistema
- 📱 **Accesibilidad**: Hacer la plataforma usable para comunidades indígenas
- 🌐 **Blockchain**: Mejora de contratos inteligentes
- 📊 **Escalabilidad**: Manejo de grandes volúmenes de registros
- 🔍 **Verificación**: Sistema de verificación de autenticidad

## Preguntas

Si tienes preguntas:

- 📧 Email: legacyiximi@gmail.com
- 💬 GitHub Discussions: Usa la sección de Discussions
- 🐛 Issues: Para bugs específicos

---

*Esta guía fue inspirada en las mejores prácticas de la comunidad de código abierto.*
