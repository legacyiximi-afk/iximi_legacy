> **Nota:** Este es el README en Español. También disponibles en [README principal](./README.md) e [Inglés](./README.en.md).

<div align="center">
  <img src="https://raw.githubusercontent.com/legacyiximi-afk/iximi-assets/main/logo/iximi-logo-banner.png" alt="IXIMI Legacy Banner" width="800"/>
  
  <h1 style="border-bottom: none;">IXIMI Legacy</h1>
  
  <p><strong>Tecnología que teje justicia para el patrimonio cultural de México</strong></p>

  <p>
    <a href="https://github.com/legacyiximi-afk/iximi_legacy/actions/workflows/ci.yml"><img src="https://github.com/legacyiximi-afk/iximi_legacy/actions/workflows/ci.yml/badge.svg" alt="Build Status"></a>
    <a href="https://codecov.io/gh/legacyiximi-afk/iximi_legacy"><img src="https://codecov.io/gh/legacyiximi-afk/iximi_legacy/branch/main/graph/badge.svg" alt="Code Coverage"></a>
    <a href="https://github.com/legacyiximi-afk/iximi_legacy/blob/main/LICENSE"><img src="https://img.shields.io/github/license/legacyiximi-afk/iximi_legacy" alt="License"></a>
    <a href="https://github.com/legacyiximi-afk/iximi_legacy/releases"><img src="https://img.shields.io/github/v/release/legacyiximi-afk/iximi_legacy" alt="Release"></a>
    <a href="https://github.com/legacyiximi-afk/iximi_legacy/issues"><img src="https://img.shields.io/github/issues/legacyiximi-afk/iximi_legacy" alt="Open Issues"></a>
    <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"></a>
  </p>
</div>

---

**IXIMI Legacy** es una plataforma de código abierto que utiliza tecnología blockchain para registrar, certificar y preservar el patrimonio cultural de las comunidades originarias de Oaxaca, México. Nuestra misión es combatir el plagio, promover el comercio justo y dar voz a los artesanos y sus narrativas ancestrales.

El proyecto nació de una convicción: que la tecnología más avanzada puede y debe servir para proteger las tradiciones más profundas. Fue desarrollado inicialmente en un teléfono Android usando Termux, demostrando que la pasión y la determinación superan cualquier barrera material.

## ✨ Características Clave

| Característica | Descripción | Estado |
| :--- | :--- | :--- |
| 📜 **Registro Inmutable** | Cada artefacto cultural se registra en la blockchain, creando un certificado de autenticidad digital, inmutable y verificable. | ✅ |
| 🗣️ **Narrativas Vivas** | La plataforma preserva las historias orales de los artesanos en sus lenguas originarias (Diidzaxa, Ñuu Savi, Didxazap). | ✅ |
| 🖼️ **Certificados NFT** | Generamos NFTs para piezas únicas, proporcionando un historial de propiedad y una nueva vía de monetización para los creadores. | 🚧 |
| 🗺️ **Mapa Interactivo** | Un dashboard visualiza la riqueza cultural de Oaxaca, conectando artefactos con sus comunidades de origen. | 🚧 |
| 🌐 **API Abierta** | Ofrecemos una API RESTful para que museos, galerías e investigadores puedan integrarse con nuestro registro cultural. | ✅ |
| 📱 **Diseño Mobile-First** | Inspirado en sus orígenes, la plataforma está diseñada para ser accesible desde cualquier dispositivo, especialmente móviles. | ✅ |

## 🚀 Guía Rápida (Instalación Local)

Para levantar el entorno de desarrollo local, necesitas **Docker** y **Docker Compose**.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/legacyiximi-afk/iximi_legacy.git
    cd iximi_legacy
    ```

2.  **Crea tu archivo de entorno:**
    Copia `.env.example` a `.env` en la carpeta `apps/backend` y ajusta las variables si es necesario.
    ```bash
    cp apps/backend/.env.example apps/backend/.env
    ```

3.  **Levanta los contenedores:**
    ```bash
    docker-compose up -d --build
    ```

¡Listo! El backend estará corriendo en `http://localhost:3001` y la base de datos en el puerto `5432`.

## 🏗️ Arquitectura del Proyecto

IXIMI Legacy está construido como un **monorepo** gestionado con `npm workspaces`, siguiendo principios de **Clean Architecture** y **Arquitectura Hexagonal** para garantizar escalabilidad, mantenibilidad y separación de conceptos.

<div align="center">
  <img src="https://raw.githubusercontent.com/legacyiximi-afk/iximi-assets/main/diagrams/iximi-architecture-diagram.png" alt="Diagrama de Arquitectura de IXIMI Legacy" width="700"/>
</div>

-   **`apps/backend`**: API RESTful construida con Node.js, Express, TypeScript y Prisma. Sigue una estructura de Clean Architecture para separar dominio, aplicación e infraestructura.
-   **`apps/frontend`**: (Próximamente) Aplicación web con React, TypeScript y Tailwind CSS.
-   **`packages/shared`**: Código compartido entre el frontend y el backend (tipos, utilidades, constantes).
-   **`packages/blockchain-sdk`**: SDK para interactuar con los smart contracts en la blockchain.

## 🤝 Cómo Contribuir

¡Tu contribución es fundamental para tejer esta red de justicia cultural! Estamos buscando colaboradores en todas las áreas: desarrollo, diseño, traducción, investigación y más.

1.  Lee nuestra **[Guía de Contribución](./CONTRIBUTING.md)** para entender nuestro flujo de trabajo.
2.  Revisa los **[Issues Abiertos](https://github.com/legacyiximi-afk/iximi_legacy/issues)** y busca uno que te interese.
3.  Haz un fork, crea una rama y envía tu Pull Request. ¡Nos aseguraremos de revisarlo lo antes posible!

## 💰 Apoya a IXIMI Legacy

Somos un proyecto de código abierto sin fines de lucro. Si crees en nuestra misión y quieres apoyar la preservación del patrimonio cultural, considera convertirte en uno de nuestros financiadores.

**¿Por qué apoyar a IXIMI?**
-   **Impacto Directo**: Tu apoyo ayuda directamente a las comunidades artesanas.
-   **Transparencia Blockchain**: Todos los fondos y su uso son trazables.
-   **Reconocimiento**: Los financiadores destacados aparecerán en nuestro sitio y materiales.

➡️ **[Conviértete en Financiador (Próximamente)]()**

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

<div align="center">
  <p><em>"Desarrollado en un teléfono, con pasión y determinación."</em></p>
  <p><strong>Estefanía Pérez Vázquez, Fundadora</strong></p>
</div>
