99#!/bin/bash

echo "🗄️ CONFIGURACIÓN SIMPLIFICADA DE POSTGRESQL"
echo "=========================================="

# 1. Instalar dependencia pg
echo "📦 Instalando PostgreSQL client..."
npm install pg --no-optional

# 2. Crear directorio config
echo "📁 Creando estructura de archivos..."
mkdir -p config

# 3. Crear archivo de configuración de base de datos
cat > config/database.js << 'DBEOF'
// Configuración de PostgreSQL para IXIMI Legacy
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/iximi_db',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL conectado');
    
    // Crear tabla básica
    await client.query(`
      CREATE TABLE IF NOT EXISTS artifacts (
        id SERIAL PRIMARY KEY,
        qr_code VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        artisan_name VARCHAR(255),
        community VARCHAR(255),
        blockchain_tx VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    client.release();
    return true;
  } catch (error) {
    console.log('⚠️  PostgreSQL no disponible, usando modo demo');
    return false;
  }
}

module.exports = { pool, testConnection };
DBEOF

echo "✅ config/database.js creado"

# 4. Actualizar package.json para incluir pg
echo "📝 Actualizando package.json..."
if [ -f "package.json" ]; then
  # Crear backup
  cp package.json package.json.backup
  
  # Crear nuevo package.json simple
  cat > package.json << 'PKGEOF'
{
  "name": "iximi-legacy",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.3"
  }
}
PKGEOF
fi

# 5. Mostrar instrucciones para Railway
echo ""
echo "🎯 INSTRUCCIONES PARA RAILWAY:"
echo ""
echo "1. Ve a: https://railway.app"
echo "2. Tu proyecto: iximilegacy-production-63f8"
echo "3. Click 'New' → 'Database' → 'PostgreSQL' → 'Add'"
echo "4. Railway agregará automáticamente:"
echo "   • DATABASE_URL"
echo "   • PGHOST, PGPORT, PGDATABASE"
echo "   • PGUSER, PGPASSWORD"
echo ""
echo "5. Opcional: Agregar Redis"
echo "   'New' → 'Database' → 'Redis' → 'Add'"
echo ""
echo "✅ Listo. Railway inyectará las variables automáticamente."
echo ""
echo "📋 Para probar localmente (sin PostgreSQL):"
echo "   El código tiene modo demo como respaldo."
EOF

# Hacer ejecutable
chmod +x setup_postgres_simple.sh

echo "✅ Script setup_postgres_simple.sh creado"
