#!/bin/bash

# Script para proteger la rama main
# Requiere un GitHub Personal Access Token con permisos: repo (full control of private repositories)

# Configura tu token
export GH_TOKEN="${GH_TOKEN:-}"

if [ -z "$GH_TOKEN" ]; then
  echo "Error: Debes establecer la variable GH_TOKEN"
  echo "Ejemplo: export GH_TOKEN='tu_token_aqui'"
  echo "O puedes crear un token en: https://github.com/settings/tokens"
  exit 1
fi

# Repo details
REPO_OWNER="legacyiximi-afk"
REPO_NAME="iximi_legacy"

echo "Protegiendo la rama main en $REPO_OWNER/$REPO_NAME..."

# Crear regla de protección para la rama main usando curl
curl -X PUT \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GH_TOKEN" \
  -d "{\"required_pull_request_reviews\":{\"dismiss_stale_reviews\":true,\"require_code_owner_reviews\":true,\"required_approving_review_count\":1},\"required_status_checks\":null,\"restrictions\":null,\"enforce_admins\":true,\"allow_force_pushes\":false,\"allow_deletions\":false}" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/branches/main/protection"

echo ""
echo "✅ Rama main protegida exitosamente"
echo ""
echo "Configuración aplicada:"
echo "  ✓ Require pull request para fusionar"
echo "  ✓ Require al menos 1 aprobación"
echo "  ✓ Descartar revisiones obsoletas"
echo "  ✓ Prohibir force push"
echo "  ✓ Prohibir eliminación de rama"
echo "  ✓ Adminstradores deben seguir las reglas"
