# Protección de Rama Main

## Resumen

Este documento describe cómo proteger la rama `main` del repositorio para prevenir cambios no autorizados.

## Configuración Manual en GitHub

### Pasos para proteger la rama main:

1. **Navegar a la configuración del repositorio**
   - Ve a: https://github.com/legacyiximi-afk/iximi_legacy/settings

2. **Ir a la sección "Branches"**
   - En el menú lateral izquierdo, selecciona **"Branches"**

3. **Agregar regla de protección**
   - Click en **"Add rule"** o **"Add branch protection rule"**

4. **Configurar la regla**
   - **Branch name pattern**: `main`
   - Opciones recomendadas:
     - ✅ **Require pull request reviews before merging**
       - Required number of reviewers: `1`
       - ✅ **Dismiss stale pull request approvals when new commits are pushed**
       - ✅ **Require review from Code Owners**
     - ✅ **Require status checks to pass before merging**
       - Search and select tus CI/CD checks (e.g., `ci.yml`)
       - ✅ **Require branches to be up to date before merging**
     - ✅ **Restrict who can push to matching branches**
     - ✅ **Allow force push**
       - ❌ **Deshabilitar** (no permitir force push)
     - ✅ **Allow deletions**
       - ❌ **Deshabilitar** (no permitir eliminar la rama)

5. **Guardar cambios**
   - Click en **"Create"** o **"Save changes"**

## Configuración Programática

Usa el script proporcionado en [`scripts/protect-main-branch.sh`](../../scripts/protect-main-branch.sh):

```bash
# Hacer ejecutable
chmod +x scripts/protect-main-branch.sh

# Ejecutar con tu token
export GH_TOKEN="tu_github_personal_access_token"
./scripts/protect-main-branch.sh
```

## Requisitos del Token de GitHub

Para usar configuración programática, necesitas un **Personal Access Token** con permisos:
- `repo` - Full control of private repositories

### Crear un Personal Access Token:

1. Ve a https://github.com/settings/tokens
2. Click en **"Generate new token (classic)"**
3. Configura:
   - **Note**: "Protect Main Branch"
   - **Expiration**: Elige una fecha (recomendado 30-90 días)
   - **Scopes**: Selecciona `repo`
4. Copia el token y úsalo en el script

## Reglas Aplicadas

| Regla | Descripción |
|-------|-------------|
| Pull Request Requerido | No se puede hacer push directo a main |
| Revisiones Requeridas | Al menos 1 aprobación antes de fusionar |
| Code Owner Review | Requiere aprobación de owners del código |
| Force Push Prohibido | Previene sobrescritura de historial |
| Eliminación Prohibida | Previene borrar la rama main |
| Admin Follow Rules | Administradores también deben seguir las reglas |

## Verificación

Para verificar que la protección está activa:

```bash
# Verificar estado de protección
gh api repos/legacyiximi-afk/iximi_legacy/branches/main/protection
```

## Solución de Problemas

### "Resource not accessible by integration"
- El token no tiene permisos suficientes
- Verifica que el token tenga scope `repo`

### No se puede hacer push
- Asegúrate de usar un branch feature
- Crea un pull request para fusionar cambios

---

# Conventional Commits

Este proyecto sigue el estándar [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial de commits limpio y autogenerar changelogs.

## Formato de Commit

```
<tipo>(<ámbito>): <descripción>

[opcional: cuerpo]
[opcional: pie]
```

## Tipos de Commit

| Tipo | Descripción |
|------|-------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Cambios en documentación |
| `style` | Cambios de formato (no afectan código) |
| `refactor` | Refactorización de código |
| `test` | Añadir o modificar tests |
| `chore` | Tareas de mantenimiento |
| `build` | Cambios en sistema de build |
| `ci` | Cambios en configuración de CI/CD |
| `perf` | Mejoras de rendimiento |
| `revert` | Revertir un commit anterior |

## Ejemplos

```
feat(auth): añadir login con Google OAuth
fix(api): corregir validación de email en endpoint
docs: actualizar sección de instalación
fix!: romper compatibilidad con versiones anteriores
```

## Configuración de Hooks

El repositorio incluye un hook de commit que valida el formato:

- Archivo de template: [`.gitmessage.txt`](../../.gitmessage.txt)
- Hook de validación: [`.git/hooks/commit-msg`](../../.git/hooks/commit-msg)
- Script de configuración: [`scripts/setup-git-hooks.sh`](../../scripts/setup-git-hooks.sh)

### Instalar hooks

```bash
./scripts/setup-git-hooks.sh
```

El hook se ejecutará automáticamente antes de cada commit y mostrará un error si el formato no es válido.
