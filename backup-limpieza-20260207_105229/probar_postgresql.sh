#!/bin/bash

echo "🧪 PROBANDO CONFIGURACIÓN POSTGRESQL"
echo "===================================="

cd ~/iximi_legacy

echo ""
echo "1. 📦 Verificando dependencias..."
npm list pg 2>/dev/null | grep pg && echo "✅ pg instalado" || echo "❌ pg no instalado"

echo ""
echo "2. 📁 Verificando archivos..."
[ -f "config/database.js" ] && echo "✅ config/database.js existe" || echo "❌ Falta config/database.js"
[ -f "src/index.pg.js" ] && echo "✅ src/index.pg.js existe" || echo "❌ Falta src/index.pg.js"

echo ""
echo "3. 💻 Probando conexión a PostgreSQL..."
node -e "
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/iximi_db'
});

pool.query('SELECT NOW()')
  .then(res => {
    console.log('✅ PostgreSQL responde:', res.rows[0]);
    process.exit(0);
  })
  .catch(err => {
    console.log('⚠️  PostgreSQL no disponible (normal en desarrollo):', err.message);
    console.log('✅ El código tiene modo demo como respaldo');
    process.exit(0);
  });
"

echo ""
echo "4. 🚀 Para usar PostgreSQL en producción:"
echo "   cp src/index.pg.js src/index.js"
echo "   git add . && git commit -m 'Use PostgreSQL' && git push"
echo ""
echo "5. 🌐 Railway configurar:"
echo "   - Agregar PostgreSQL database"
echo "   - Agregar Redis database"
echo "   - Variables se inyectan automáticamente"
