<div align="center">

# IXIMI Legacy

### Certificación Digital para Textiles Indígenas de México

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/code%20of%20conduct-enforced-blue.svg)](CODE_OF_CONDUCT.md)

*Tecnología que teje justicia para México.*

[Documentación](docs/) · [Reportar un Bug](https://github.com/legacyiximi-afk/iximi_legacy/issues/new?template=bug_report.md) · [Solicitar una Función](https://github.com/legacyiximi-afk/iximi_legacy/issues/new?template=feature_request.md)

</div>

---

## ¿Qué es IXIMI Legacy?

IXIMI Legacy es una plataforma de código abierto que utiliza tecnología blockchain para **certificar la autenticidad y el origen de los textiles indígenas de México**. Cada pieza registrada recibe un certificado digital inmutable en la blockchain de Polygon, junto con un código QR único que permite a consumidores y compradores verificar la historia y autenticidad del producto en tiempo real.

El proyecto nació con el objetivo de proteger el patrimonio cultural de las comunidades artesanas de Oaxaca y combatir la piratería de diseños indígenas, empoderando directamente a los creadores.

## Características Principales

| Característica | Descripción |
|---|---|
| **Certificación Blockchain** | Registro inmutable en Polygon para cada textil |
| **Verificación QR** | Código QR único para autenticar cualquier pieza |
| **Dashboard Administrativo** | Gestión de artesanos, textiles y certificados |
| **API REST** | API documentada con Swagger para integraciones |
| **Seguridad Robusta** | Helmet, CORS, rate limiting y validación de entradas |

## Empezando

### Prerrequisitos

- [Node.js](https://nodejs.org/) >= 18.0.0
- [npm](https://www.npmjs.com/) >= 8.0.0

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/legacyiximi-afk/iximi_legacy.git
cd iximi_legacy

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita el archivo .env con tus valores

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

Para instrucciones más detalladas, consulta la [Guía de Inicio Rápido](docs/QUICKSTART.md).

## Uso

Una vez que el servidor esté en ejecución, puedes acceder a:

- **Plataforma principal:** `http://localhost:3000`
- **Dashboard:** `http://localhost:3000/dashboard`
- **Documentación de la API:** `http://localhost:3000/api-docs`
- **Estado del sistema:** `http://localhost:3000/api/health`

## Contribuyendo

¡Las contribuciones son bienvenidas! Si quieres ayudar a mejorar IXIMI Legacy, por favor lee nuestra [Guía de Contribuciones](CONTRIBUTING.md) antes de empezar.

En resumen:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio (`git checkout -b feat/mi-nueva-funcion`).
3. Haz commit de tus cambios (`git commit -m 'feat: añadir mi nueva función'`).
4. Haz push a tu rama (`git push origin feat/mi-nueva-funcion`).
5. Abre un Pull Request.

## Seguridad

Para reportar vulnerabilidades de seguridad, por favor lee nuestra [Política de Seguridad](SECURITY.md). **No abras un issue público.**

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Sobre la Fundadora

IXIMI Legacy fue creado por **Estefanía Pérez Vázquez**, fundadora y arquitecta principal del proyecto. Desarrolló este sistema desde cero, de forma autodidacta, con el firme propósito de usar la tecnología como herramienta de justicia social para las comunidades indígenas de México.

---

<div align="center">
  Hecho con ❤️ para las comunidades artesanas de México.
</div>
