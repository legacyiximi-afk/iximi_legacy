#!/bin/bash
# ============================================
# VERIFICACIÓN RAILWAY - DESDE TERMUX O CUALQUIER LUGAR
# ============================================

echo "🏛️ IXIMI LEGACY - VERIFICACIÓN DE SISTEMA"
echo "==========================================="
echo ""

# URLs principales
HEALTH_URL="https://iximilegacy-production-63f8.up.railway.app/health"
DASHBOARD_URL="https://iximilegacy-production-63f8.up.railway.app/dashboard"
DEMO_URL="https://iximilegacy-production-63f8.up.railway.app/demo-meeting"

echo "1. 🔍 Verificando HEALTH CHECK..."
echo "   URL: $HEALTH_URL"
echo ""
curl -s "$HEALTH_URL" | jq .
echo ""

echo "==========================================="
echo "2. 📊 Verificando DASHBOARD..."
echo "   URL: $DASHBOARD_URL"
echo ""
curl -s "$DASHBOARD_URL" | jq .
echo ""

echo "==========================================="
echo "3. 🎯 Verificando DEMO MEETING..."
echo "   URL: $DEMO_URL"
echo ""
curl -s "$DEMO_URL" | jq .
echo ""

echo "==========================================="
echo "✅ VERIFICACIÓN COMPLETA"
echo ""
echo "📱 Si todos los endpoints responden con 'status': 'healthy'"
echo "   entonces el sistema está funcionando correctamente."
echo ""
echo "🌐 Para abrir en navegador:"
echo "   $HEALTH_URL"
echo "   $DASHBOARD_URL"
echo "   $DEMO_URL"
