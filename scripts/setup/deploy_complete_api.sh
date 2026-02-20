#!/bin/bash

echo "🚀 DEPLOY COMPLETO - IXIMI LEGACY API"
echo "======================================"

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# 1. Verificar Node.js
echo -e "${YELLOW}1. Verificando Node.js...${NC}"
node --version || { echo -e "${RED}❌ Node.js no instalado${NC}"; exit 1; }

# 2. Verificar estructura
echo -e "${YELLOW}2. Verificando estructura del proyecto...${NC}"
if [ ! -f "src/index.js" ]; then
  echo -e "${RED}❌ No se encontró src/index.js${NC}"
  exit 1
fi

# 3. Verificar package.json
echo -e "${YELLOW}3. Verificando package.json...${NC}"
if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ No se encontró package.json${NC}"
  exit 1
fi

# 4. Verificar Dockerfile
echo -e "${YELLOW}4. Verificando Dockerfile...${NC}"
if [ ! -f "Dockerfile" ]; then
  echo -e "${RED}❌ No se encontró Dockerfile${NC}"
  exit 1
fi

# 5. Verificar railway.json
echo -e "${YELLOW}5. Verificando railway.json...${NC}"
if [ ! -f "railway.json" ]; then
  echo -e "${RED}❌ No se encontró railway.json${NC}"
  exit 1
fi

# 6. Verificar endpoint /api/health
echo -e "${YELLOW}6. Verificando endpoint /api/health...${NC}"
if grep -q "app.get('/api/health'" src/index.js; then
  echo -e "${GREEN}✅ Endpoint /api/health encontrado${NC}"
else
  echo -e "${RED}❌ Endpoint /api/health NO encontrado${NC}"
  exit 1
fi

# 7. Verificar dependencias
echo -e "${YELLOW}7. Verificando dependencias...${NC}"
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}⚠️  Instalando dependencias...${NC}"
  npm install --production
fi

# 8. Verificar que express esté instalado
echo -e "${YELLOW}8. Verificando express...${NC}"
if npm list express > /dev/null 2>&1; then
  echo -e "${GREEN}✅ Express instalado${NC}"
else
  echo -e "${YELLOW}⚠️  Instalando express...${NC}"
  npm install express --save
fi

# 9. Verificar la configuración de Railway
echo -e "${YELLOW}9. Verificando configuración de Railway...${NC}"
if grep -q '"/api/health"' railway.json; then
  echo -e "${GREEN}✅ Healthcheck configurado en railway.json${NC}"
else
  echo -e "${RED}❌ Healthcheck NO configurado en railway.json${NC}"
  exit 1
fi

# 10. Verificar la configuración del Dockerfile
echo -e "${YELLOW}10. Verificando configuración del Dockerfile...${NC}"
if grep -q "src/index.js" Dockerfile; then
  echo -e "${GREEN}✅ Dockerfile configurado correctamente${NC}"
else
  echo -e "${RED}❌ Dockerfile NO configurado correctamente${NC}"
  exit 1
fi

echo ""
echo -e "${GREEN}✅ TODAS LAS VERIFICACIONES PASARON${NC}"
echo ""
echo "🎯 Resumen de configuración:"
echo "  • src/index.js: API principal con endpoints"
echo "  • package.json: Dependencias configuradas"
echo "  • Dockerfile: Configuración de Docker"
echo "  • railway.json: Healthcheck en /api/health"
echo ""
echo "🌐 URLs para verificar después del deploy:"
echo "  • https://iximilegacy-production-63f8.up.railway.app/api/health"
echo "  • https://iximilegacy-production-63f8.up.railway.app/demo-meeting"
echo "  • https://iximilegacy-production-63f8.up.railway.app/api/project"
echo ""
echo "📱 Próximos pasos:"
echo "  1. Ve a https://railway.app"
echo "  2. Proyecto: iximilegacy-production-63f8"
echo "  3. Haz 'Manual Deploy'"
echo "  4. Espera 3-5 minutos"
echo ""
