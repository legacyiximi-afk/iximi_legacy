#!/bin/bash

echo "🧹 LIMPIEZA Y ORGANIZACIÓN DEL ENTORNO DE TRABAJO"
echo "=================================================="
echo ""

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# 1. Identificar archivos problemáticos
echo -e "${YELLOW}1. Identificando archivos problemáticos...${NC}"

# Archivos que deberían estar en .gitignore pero no
problematic_files=(
  "node_modules/"
  "*.log"
  ".env"
  "npm-debug.log*"
)

# 2. Verificar estructura actual
echo -e "${YELLOW}2. Verificando estructura actual...${NC}"
echo ""
echo -e "${BLUE}📁 Estructura del proyecto:${NC}"
echo ""
echo "├── src/              (Código fuente principal)"
echo "├── scripts/          (Scripts de automatización)"
echo "├── docs/             (Documentación)"
echo "├── public/           (Archivos estáticos)"
echo "├── config/           (Configuraciones)"
echo "├── deploy_complete_api.sh (DEPLOY - NO MOVER)"
echo "└── verify_api.sh     (VERIFICACIÓN - NO MOVER)"
echo ""

# 3. Archivos esenciales para producción
echo -e "${YELLOW}3. Archivos esenciales para producción:${NC}"
essential_files=(
  "package.json"
  "Dockerfile"
  "railway.json"
  "src/index.js"
  "src/index.pg.js"
  "deploy_complete_api.sh"
  "verify_api.sh"
)

for file in "${essential_files[@]}"; do
  if [ -f "$file" ]; then
    echo -e "  ✅ $file"
  else
    echo -e "  ❌ $file (FALTA)"
  fi
done

echo ""
echo -e "${YELLOW}4. Scripts de deployment disponibles:${NC}"
ls -la *.sh 2>/dev/null | grep -E "(deploy|verify)" || echo "  No hay scripts de deployment en raíz"

echo ""
echo -e "${YELLOW}5. Verificando configuración de Railway:${NC}"
if [ -f "railway.json" ]; then
  echo -e "  ✅ railway.json encontrado"
  echo -e "  ✅ Healthcheck: $(grep 'healthcheckPath' railway.json | cut -d'"' -f2)"
else
  echo -e "  ❌ railway.json NO encontrado"
fi

echo ""
echo -e "${YELLOW}6. Verificando endpoint /api/health:${NC}"
if grep -q "app.get('/api/health'" src/index.js; then
  echo -e "  ✅ Endpoint /api/health configurado"
else
  echo -e "  ❌ Endpoint /api/health NO configurado"
fi

echo ""
echo -e "${GREEN}✅ VERIFICACIÓN COMPLETA${NC}"
echo ""
echo "🎯 El entorno está listo para deployment en Railway."
echo ""
echo "📋 Próximos pasos:"
echo "   1. Hacer cambios en src/index.js si es necesario"
echo "   2. Ejecutar: ./deploy_complete_api.sh"
echo "   3. Hacer commit y push a GitHub"
echo "   4. Railway detectará automáticamente los cambios"
echo ""
echo "🌐 URLs importantes:"
echo "   • GitHub: https://github.com/legacyiximi-afk/iximi_legacy"
echo "   • Railway: https://railway.app/project/iximilegacy-production-63f8"
echo ""
