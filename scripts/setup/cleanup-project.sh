#!/bin/bash

# ============================================
# LIMPIEZA DE PROYECTO IXIMI LEGACY
# Elimina archivos innecesarios y deja solo lo esencial
# ============================================

echo "🧹 LIMPIEZA DE PROYECTO IXIMI LEGACY"
echo "====================================="
echo ""

DIRECTORIO_ACTUAL=$(pwd)
BACKUP_DIR="backup-limpieza-$(date +%Y%m%d_%H%M%S)"

# Crear directorio de backup
mkdir -p "$BACKUP_DIR"

echo "📁 Respaldando archivos a eliminar en: $BACKUP_DIR"
echo ""

# ============================================
# ARCHIVOS A ELIMINAR (CON BACKUP)
# ============================================

# Backups antiguos
echo "📦 Respaldando archivos de backup..."
cp src/index.js.backup "$BACKUP_DIR/" 2>/dev/null || true
cp src/index.js.backup.* "$BACKUP_DIR/" 2>/dev/null || true
cp src/index.js.problematic "$BACKUP_DIR/" 2>/dev/null || true

# Scripts de setup antiguos
cp setup_postgres_simple.sh "$BACKUP_DIR/" 2>/dev/null || true
cp setup-iximi.sh "$BACKUP_DIR/" 2>/dev/null || true
cp fix_demo.sh "$BACKUP_DIR/" 2>/dev/null || true
cp fix_dependencies.sh "$BACKUP_DIR/" 2>/dev/null || true

# Scripts de verificación (temporal)
cp probar_postgresql.sh "$BACKUP_DIR/" 2>/dev/null || true
cp verify-endpoints.sh "$BACKUP_DIR/" 2>/dev/null || true
cp verify-railway.sh "$BACKUP_DIR/" 2>/dev/null || true

# Archivos temporales
cp configure_bd_completo.sh "$BACKUP_DIR/" 2>/dev/null || true
cp deploy-render.sh "$BACKUP_DIR/" 2>/dev/null || true

echo "✅ Respaldos completados"
echo ""

# ============================================
# ELIMINAR ARCHIVOS
# ============================================

echo "🗑️ Eliminando archivos innecesarios..."

# Backups
rm -f src/index.js.backup
rm -f src/index.js.backup.*
rm -f src/index.js.problematic

# Scripts de setup
rm -f setup_postgres_simple.sh
rm -f setup-iximi.sh
rm -f fix_demo.sh
rm -f fix_dependencies.sh

# Scripts de verificación temporales
rm -f probar_postgresql.sh
rm -f verify-endpoints.sh
rm -f verify-railway.sh
rm -f configure_bd_completo.sh
rm -f deploy-render.sh

# Eliminar directorio de test-results si existe
rm -rf test-results

echo "✅ Eliminación completada"
echo ""

# ============================================
# ARCHIVOS ESENCIALES (QUE QUEDAN)
# ============================================

echo "📋 ARCHIVOS ESENCIALES QUE QUEDAN:"
echo ""
echo "┌─────────────────────────────────────────────────────┐"
echo "│ 📁 src/                                             │"
echo "│   └── index.js          (API principal)             │"
echo "│   └── index.pg.js      (PostgreSQL version)        │"
echo "├─────────────────────────────────────────────────────┤"
echo "│ 📁 config/                                            │"
echo "│   └── database.js     (Conexión PostgreSQL)         │"
echo "├─────────────────────────────────────────────────────┤"
echo "│ 📁 public/                                           │"
echo "│   └── dashboard.html    (Dashboard)                 │"
echo "│   └── demo-meeting.html (Demo meeting)              │"
echo "│   └── index.html        (Landing)                   │"
echo "├─────────────────────────────────────────────────────┤"
echo "│ 📄 package.json         (Dependencias)              │"
echo "│ 📄 railway.json         (Configuración Railway)      │"
echo "│ 📄 Dockerfile           (Contenedor)                 │"
echo "│ 📄 docker-compose.yml   (Docker compose)             │"
echo "│ 📄 GUIA-REUNION-DEMO.md (Guía para reunión)         │"
echo "│ 📄 README.md            (Documentación)              │"
echo "│ 📄 .github/workflows/ci.yml (CI/CD simplificado)    │"
echo "└─────────────────────────────────────────────────────┘"
echo ""

# ============================================
# MOSTRAR ESTRUCTURA FINAL
# ============================================

echo "📁 ESTRUCTURA FINAL DEL PROYECTO:"
echo ""
tree -L 3 -I 'node_modules|backup-*' . 2>/dev/null || find . -maxdepth 3 -not -path '*/node_modules/*' -not -path '*/.git/*' -not -path '*/backup-*' | sort
echo ""

# ============================================
# COMMIT DE LIMPIEZA
# ============================================

echo ""
echo "🔄 PARA SUBIR CAMBIOS A GITHUB:"
echo ""
echo "git add -A"
echo 'git commit -m "chore: Clean up project - remove unnecessary files'
echo ''
echo 'Keep only essential files:'
echo '- src/index.js (main API)'
echo '- config/database.js (PostgreSQL)'
echo '- public/* (frontend)'
echo '- railway.json (Railway config)'
echo '- Dockerfile (container)"'
echo ""
echo "git push origin main"
echo ""

echo "✅ LIMPIEZA COMPLETADA"
echo "📦 Backup guardado en: $BACKUP_DIR"
