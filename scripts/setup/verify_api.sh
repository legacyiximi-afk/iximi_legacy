#!/bin/bash

echo "🔍 Verificando API completa..."
echo "================================"

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Dominio de Railway
DOMAIN="https://iximilegacy-production-63f8.up.railway.app"

# Endpoints a verificar
endpoints=(
  "/api/health"
  "/api/project"
  "/api/demo"
  "/dashboard"
  "/demo-meeting"
  "/api/verify/QR001"
)

echo ""
echo "🌐 Verificando endpoints en: $DOMAIN"
echo ""

total=0
passed=0
failed=0

for endpoint in "${endpoints[@]}"; do
  total=$((total + 1))
  echo -n "Testing $endpoint... "
  
  if curl -s -f "$DOMAIN$endpoint" > /dev/null 2>&1; then
    echo -e "${GREEN}✅${NC}"
    passed=$((passed + 1))
  else
    echo -e "${RED}❌${NC}"
    failed=$((failed + 1))
  fi
  sleep 1
done

echo ""
echo "📊 Resumen:"
echo "  Total verificados: $total"
echo "  ✅ Pasados: $passed"
echo "  ❌ Fallidos: $failed"
echo ""

if [ $failed -eq 0 ]; then
  echo -e "${GREEN}🎉 TODOS LOS ENDPOINTS ESTÁN FUNCIONANDO${NC}"
  exit 0
else
  echo -e "${YELLOW}⚠️  Algunos endpoints necesitan atención${NC}"
  exit 1
fi
