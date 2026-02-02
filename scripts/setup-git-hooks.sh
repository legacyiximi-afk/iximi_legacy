#!/bin/bash

# Script para configurar Git hooks y templates de commit

set -e

echo "🔧 Configurando Git hooks y mensajes de commit..."

# Directorio del repositorio (donde está este script)
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Copiar template de mensaje
cp "$REPO_DIR/.gitmessage.txt" "$REPO_DIR/.gitmessage.txt.tmp"
git config commit.template "$REPO_DIR/.gitmessage.txt"
echo "✅ Template de mensaje de commit configurado"

# Instalar hook de commit-msg
HOOK_SOURCE="$REPO_DIR/.git/hooks/commit-msg"
HOOK_DEST="$REPO_DIR/.git/hooks/commit-msg"

if [ -f "$HOOK_SOURCE" ]; then
  chmod +x "$HOOK_SOURCE"
  echo "✅ Hook commit-msg instalado"
else
  echo "⚠️  No se encontró el archivo de hook"
fi

# Configurar Git para usar el directorio actual como template
git config init.templateDir "$REPO_DIR"

echo ""
echo "🎉 Configuración completada!"
echo ""
echo "Tipos de commit válidos:"
echo "  • feat     - Nueva funcionalidad"
echo "  • fix      - Corrección de bug"
echo "  • docs     - Cambios en documentación"
echo "  • style    - Cambios de formato"
echo "  • refactor - Refactorización"
echo "  • test     - Tests"
echo "  • chore    - Mantenimiento"
echo ""
echo "Ejemplo de commit válido:"
echo "  feat(auth): añadir login con OAuth"
