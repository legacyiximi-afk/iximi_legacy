#!/bin/bash
# deploy-render.sh - Script para deploy en Render
# Uso: ./deploy-render.sh

set -e

# Colores para输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Iniciando deploy de IXIMI Legacy en Render${NC}"
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encontró package.json. Asegúrate de estar en el directorio del proyecto.${NC}"
    exit 1
fi

# Verificar cambios locales
echo -e "${YELLOW}📋 Verificando estado del repositorio...${NC}"
cd "$(dirname "$0")"

if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  Hay cambios locales sin commitear${NC}"
    git status --short
    echo ""
    read -p "¿Deseas hacer commit de los cambios? (s/n): " response
    if [ "$response" = "s" ] || [ "$response" = "S" ]; then
        read -p "Ingresa el mensaje de commit: " commit_msg
        git add .
        git commit -m "$commit_msg"
        echo -e "${GREEN}✅ Commit realizado${NC}"
    fi
fi

# Hacer push a GitHub
echo ""
echo -e "${YELLOW}📤 Sincronizando con GitHub...${NC}"
git push origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Push exitoso${NC}"
else
    echo -e "${RED}❌ Error al hacer push${NC}"
    exit 1
fi

# Verificar variable de entorno para Render
if [ -z "$RENDER_SERVICE_ID" ]; then
    echo -e "${YELLOW}⚠️  RENDER_SERVICE_ID no está configurado${NC}"
    echo "Para usar el deploy automático en Render, necesitas:"
    echo ""
    echo "1. Ve a: https://dashboard.render.com"
    echo "2. Selecciona tu servicio iximi-legacy"
    echo "3. Ve a Settings > Deploy"
    echo "4. Busca 'Deploy Hook' y crea uno"
    echo "5. Copia el URL del hook"
    echo ""
    echo "Luego ejecuta:"
    echo "  export RENDER_DEPLOY_HOOK='TU_HOOK_URL'"
    echo "  ./deploy-render.sh"
    echo ""
    echo -e "${GREEN}📝 Los cambios ya están en GitHub.${NC}"
    echo -e "${GREEN}💡 Haz deploy manual en Render Dashboard.${NC}"
    exit 0
fi

# Trigger deploy en Render usando el webhook
echo ""
echo -e "${YELLOW}🎯 Triggering deploy en Render...${NC}"
echo "Service ID: $RENDER_SERVICE_ID"

# Usar el webhook de Render si está configurado
if [ -n "$RENDER_DEPLOY_HOOK" ]; then
    response=$(curl -s -X POST "$RENDER_DEPLOY_HOOK")
    echo -e "${GREEN}✅ Deploy trigger enviado a Render${NC}"
    echo "Response: $response"
else
    echo -e "${YELLOW}⚠️  No hay webhook configurado${NC}"
    echo "Ve a Render Dashboard > Settings > Deploy > Deploy Hook"
fi

echo ""
echo -e "${GREEN}✅ Deploy iniciado${NC}"
echo -e "${GREEN}💡 Revisa el estado en: https://dashboard.render.com${NC}"
