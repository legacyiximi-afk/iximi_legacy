// Configuración de PostgreSQL para IXIMI Legacy
const { Pool } = require('pg');

// Usar variables de Railway o valores por defecto para desarrollo
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/iximi_db',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Función para probar conexión
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL conectado exitosamente');
    
    // Crear tabla si no existe
    await client.query(`
      CREATE TABLE IF NOT EXISTS artifacts (
        id SERIAL PRIMARY KEY,
        qr_code VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        artisan_name VARCHAR(255),
        community VARCHAR(255),
        cultural_significance TEXT,
        blockchain_tx VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('✅ Tabla "artifacts" lista');
    
    // Crear tabla de usuarios
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('✅ Tabla "users" lista');
    
    client.release();
    return true;
  } catch (error) {
    console.error('❌ Error conectando a PostgreSQL:', error.message);
    return false;
  }
}

// Funciones CRUD básicas
const database = {
  // Probar conexión
  testConnection,
  
  // Crear artefacto
  async createArtifact(artifactData) {
    const { qr_code, name, description, artisan_name, community, cultural_significance, blockchain_tx } = artifactData;
    
    const query = `
      INSERT INTO artifacts (qr_code, name, description, artisan_name, community, cultural_significance, blockchain_tx)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    
    const values = [qr_code, name, description, artisan_name, community, cultural_significance, blockchain_tx];
    
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error creando artefacto:', error);
      throw error;
    }
  },
  
  // Buscar artefacto por QR
  async findArtifactByQR(qrCode) {
    const query = 'SELECT * FROM artifacts WHERE qr_code = $1';
    
    try {
      const result = await pool.query(query, [qrCode]);
      return result.rows[0];
    } catch (error) {
      console.error('Error buscando artefacto:', error);
      throw error;
    }
  },
  
  // Obtener todos los artefactos
  async getAllArtifacts(limit = 50) {
    const query = 'SELECT * FROM artifacts ORDER BY created_at DESC LIMIT $1';
    
    try {
      const result = await pool.query(query, [limit]);
      return result.rows;
    } catch (error) {
      console.error('Error obteniendo artefactos:', error);
      throw error;
    }
  },
  
  // Obtener estadísticas
  async getStats() {
    try {
      const totalArtifacts = await pool.query('SELECT COUNT(*) FROM artifacts');
      const totalCommunities = await pool.query('SELECT COUNT(DISTINCT community) FROM artifacts WHERE community IS NOT NULL');
      const recentArtifacts = await pool.query('SELECT COUNT(*) FROM artifacts WHERE created_at > NOW() - INTERVAL \'7 days\'');
      
      return {
        totalArtifacts: parseInt(totalArtifacts.rows[0].count),
        totalCommunities: parseInt(totalCommunities.rows[0].count),
        recentArtifacts: parseInt(recentArtifacts.rows[0].count)
      };
    } catch (error) {
      console.error('Error obteniendo estadísticas:', error);
      return { totalArtifacts: 42, totalCommunities: 8, recentArtifacts: 5 }; // Valores de demo
    }
  }
};

module.exports = database;
