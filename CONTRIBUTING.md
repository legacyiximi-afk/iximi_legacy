>
# 🤝 Guía de Contribución para IXIMI Legacy

¡Gracias por tu interés en contribuir a IXIMI Legacy! Tu ayuda es invaluable para construir una plataforma que proteja y celebre el patrimonio cultural de México. Al participar en este proyecto, aceptas regirte por nuestro [Código de Conducta](./CODE_OF_CONDUCT.md).

## 🚀 Cómo Puedes Contribuir

Hay muchas maneras de contribuir, no solo con código:

-   **📝 Reportando Bugs**: Si encuentras un error, por favor, [crea un issue](https://github.com/legacyiximi-afk/iximi_legacy/issues/new?template=bug_report.md) detallando el problema, cómo reproducirlo y el comportamiento esperado.
-   **💡 Sugiriendo Mejoras**: ¿Tienes una idea para una nueva funcionalidad o una mejora? [Abre un issue](https://github.com/legacyiximi-afk/iximi_legacy/issues/new?template=feature_request.md) para discutirla.
-   **📖 Mejorando la Documentación**: Si ves algo que no está claro o podría mejorarse en nuestra documentación, ¡no dudes en proponer cambios!
-   **🎨 Aportando en Diseño**: Si eres diseñador/a UX/UI, tus ideas para mejorar la experiencia de usuario son más que bienvenidas.
-   **✍️ Escribiendo Código**: Si quieres ensuciarte las manos con código, ¡genial! Sigue los pasos a continuación.

## 🛠️ Flujo de Trabajo para Contribuciones de Código

### 1. Configura tu Entorno

Asegúrate de tener **Node.js (>=18)**, **npm (>=9)** y **Docker** instalados. Luego, sigue las instrucciones del [README.md](./README.md) para clonar el repositorio y levantar el entorno de desarrollo.

### 2. Elige un Issue

-   Busca en los [issues abiertos](https://github.com/legacyiximi-afk/iximi_legacy/issues). Recomendamos empezar por aquellos etiquetados como `good first issue` o `help wanted`.
-   Comenta en el issue que te gustaría trabajarlo para que podamos asignártelo y evitar trabajo duplicado.

### 3. Crea una Rama

Crea una rama descriptiva para tus cambios. Usamos el siguiente formato:

```bash
# Para nuevas funcionalidades
git checkout -b feat/nombre-funcionalidad

# Para corrección de bugs
git checkout -b fix/descripcion-bug

# Para documentación
git checkout -b docs/tema-documentacion
```

### 4. Escribe tu Código

-   **Sigue el Estilo de Código**: Usamos ESLint y Prettier para mantener un estilo consistente. Ejecuta `npm run lint` y `npm run format` antes de hacer commit.
-   **Escribe Tests**: Toda nueva funcionalidad o corrección de bug debe ir acompañada de tests (unitarios, de integración o E2E). Nuestro objetivo es mantener una alta cobertura de código.
-   **Commits Semánticos**: Usamos [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Esto nos ayuda a generar el `CHANGELOG.md` automáticamente y a mantener un historial de cambios claro.

    **Formato del commit:**

    ```
    <tipo>[ámbito opcional]: <descripción>

    [cuerpo opcional]

    [pie opcional]
    ```

    **Ejemplos:**

    ```bash
    # Nueva funcionalidad
    git commit -m "feat(api): add endpoint for community statistics"

    # Corrección de bug
    git commit -m "fix(auth): correct password reset token validation"

    # Documentación
    git commit -m "docs(readme): update installation instructions"
    ```

### 5. Envía tu Pull Request (PR)

-   Una vez que tus cambios estén listos, haz `push` a tu fork y crea un Pull Request hacia la rama `main` de nuestro repositorio.
-   Usa la plantilla de PR proporcionada. Describe claramente los cambios que has hecho y enlaza el issue que resuelve.
-   Asegúrate de que todas las comprobaciones de CI (GitHub Actions) pasen correctamente.

### 6. Revisión de Código

-   Uno o más mantenedores del proyecto revisarán tu PR.
-   Es posible que te pidan algunos cambios. ¡No te desanimes! Es parte del proceso para asegurar la calidad del proyecto.
-   Una vez que tu PR sea aprobado, ¡lo fusionaremos y tu contribución formará parte de IXIMI Legacy!

## 💬 Comunidad y Comunicación

-   **GitHub Issues**: Para discusiones técnicas relacionadas con el código.
-   **Discord (Próximamente)**: Para discusiones más generales, preguntas y para conectar con otros miembros de la comunidad.

## 📜 Código de Conducta

Nos comprometemos a mantener una comunidad acogedora, respetuosa e inclusiva. Por favor, lee y sigue nuestro [Código de Conducta](./CODE_OF_CONDUCT.md).

¡Gracias de nuevo por tu interés en IXIMI Legacy! Juntos, podemos usar la tecnología para un futuro más justo y equitativo.
