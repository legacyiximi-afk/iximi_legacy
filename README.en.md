> **Note:** This is the English README. Also available in [main README](./README.md) and [Spanish](./README.es.md).

<div align="center">
  <img src="https://raw.githubusercontent.com/legacyiximi-afk/iximi-assets/main/logo/iximi-logo-banner.png" alt="IXIMI Legacy Banner" width="800"/>
  
  <h1 style="border-bottom: none;">IXIMI Legacy</h1>
  
  <p><strong>Technology that weaves justice for Mexico's cultural heritage</strong></p>

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

**IXIMI Legacy** is an open-source platform that uses blockchain technology to register, certify, and preserve the cultural heritage of the indigenous communities of Oaxaca, Mexico. Our mission is to combat plagiarism, promote fair trade, and give a voice to artisans and their ancestral narratives.

The project was born from a conviction: that the most advanced technology can and should serve to protect the deepest traditions. It was initially developed on an Android phone using Termux, proving that passion and determination overcome any material barrier.

## ✨ Key Features

| Feature | Description | Status |
| :--- | :--- | :--- |
| 📜 **Immutable Registry** | Each cultural artifact is registered on the blockchain, creating a digital, immutable, and verifiable certificate of authenticity. | ✅ |
| 🗣️ **Living Narratives** | The platform preserves the oral histories of artisans in their native languages (Diidzaxa, Ñuu Savi, Didxazap). | ✅ |
| 🖼️ **NFT Certificates** | We generate NFTs for unique pieces, providing a history of ownership and a new monetization channel for creators. | 🚧 |
| 🗺️ **Interactive Map** | A dashboard visualizes the cultural richness of Oaxaca, connecting artifacts with their communities of origin. | 🚧 |
| 🌐 **Open API** | We offer a RESTful API for museums, galleries, and researchers to integrate with our cultural registry. | ✅ |
| 📱 **Mobile-First Design** | Inspired by its origins, the platform is designed to be accessible from any device, especially mobile. | ✅ |

## 🚀 Quick Start (Local Installation)

To set up the local development environment, you need **Docker** and **Docker Compose**.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/legacyiximi-afk/iximi_legacy.git
    cd iximi_legacy
    ```

2.  **Create your environment file:**
    Copy `.env.example` to `.env` in the `apps/backend` folder and adjust the variables if necessary.
    ```bash
    cp apps/backend/.env.example apps/backend/.env
    ```

3.  **Start the containers:**
    ```bash
    docker-compose up -d --build
    ```

Done! The backend will be running at `http://localhost:3001` and the database on port `5432`.

## 🏗️ Project Architecture

IXIMI Legacy is built as a **monorepo** managed with `npm workspaces`, following **Clean Architecture** and **Hexagonal Architecture** principles to ensure scalability, maintainability, and separation of concerns.

<div align="center">
  <img src="https://raw.githubusercontent.com/legacyiximi-afk/iximi-assets/main/diagrams/iximi-architecture-diagram.png" alt="IXIMI Legacy Architecture Diagram" width="700"/>
</div>

-   **`apps/backend`**: RESTful API built with Node.js, Express, TypeScript, and Prisma. Follows a Clean Architecture structure to separate domain, application, and infrastructure.
-   **`apps/frontend`**: (Coming soon) Web application with React, TypeScript, and Tailwind CSS.
-   **`packages/shared`**: Shared code between the frontend and backend (types, utilities, constants).
-   **`packages/blockchain-sdk`**: SDK for interacting with smart contracts on the blockchain.

## 🤝 How to Contribute

Your contribution is essential to weave this network of cultural justice! We are looking for collaborators in all areas: development, design, translation, research, and more.

1.  Read our **[Contribution Guide](./CONTRIBUTING.md)** to understand our workflow.
2.  Check the **[Open Issues](https://github.com/legacyiximi-afk/iximi_legacy/issues)** and find one that interests you.
3.  Fork, create a branch, and submit your Pull Request. We'll make sure to review it as soon as possible!

## 💰 Support IXIMI Legacy

We are a non-profit, open-source project. If you believe in our mission and want to support the preservation of cultural heritage, consider becoming one of our funders.

**Why support IXIMI?**
-   **Direct Impact**: Your support directly helps artisan communities.
-   **Blockchain Transparency**: All funds and their use are traceable.
-   **Recognition**: Featured funders will appear on our site and materials.

➡️ **[Become a Funder (Coming Soon)]()**

## 📜 License

This project is under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

<div align="center">
  <p><em>"Developed on a phone, with passion and determination."</em></p>
  <p><strong>Estefanía Pérez Vázquez, Founder</strong></p>
</div>
