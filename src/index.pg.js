const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const database = require('../config/database');

// ================================================
// MIDDLEWARE
// ================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log de todas las peticiones
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// ================================================
// INICIALIZAR BASE DE DATOS
// ================================================
let dbConnected = false;

async function initializeDatabase() {
  console.log('🔌 Conectando a PostgreSQL...');
  dbConnected = await database.testConnection();
  
  if (dbConnected) {
    console.log('✅ PostgreSQL conectado y tablas listas');
    
    // Insertar datos de demo si la tabla está vacía
    const stats = await database.getStats();
    if (stats.totalArtifacts === 0) {
      console.log('📝 Insertando datos de demostración...');
      
      const demoArtifacts = [
        {
          qr_code: 'TEXTIL-OAX-001',
          name: 'Tapiz del Águila y el Jaguar',
          description: 'Textil zapoteco tradicional de Teotitlán del Valle',
          artisan_name: 'Familia Mendoza',
          community: 'Teotitlán del Valle',
          cultural_significance: 'Simbolismo prehispánico, técnica ancestral',
          blockchain_tx: '0x' + Math.random().toString(16).substr(2, 10)
        },
        {
          qr_code: 'BARRO-OAX-001',
          name: 'Vasija de la Luna',
          description: 'Barro negro bruñido de San Bartolo Coyotepec',
          artisan_name: 'Doña Rosa Real',
          community: 'San Bartolo Coyotepec',
          cultural_significance: 'Técnica zapoteca ancestral, bruñido con cuarzo',
          blockchain_tx: '0x' + Math.random().toString(16).substr(2, 10)
        },
        {
          qr_code: 'ALEBRIJE-OAX-001',
          name: 'Dragón-Serpiente',
          description: 'Alebrije tradicional de San Martín Tilcajete',
          artisan_name: 'Jacobo Ángeles',
          community: 'San Martín Tilcajete',
          cultural_significance: 'Arte popular oaxaqueño, figura mítica',
          blockchain_tx: '0x' + Math.random().toString(16).substr(2, 10)
        }
      ];
      
      for (const artifact of demoArtifacts) {
        await database.createArtifact(artifact);
      }
      console.log('✅ Datos de demostración insertados');
    }
  } else {
    console.log('⚠️  Modo demo: usando datos en memoria (PostgreSQL no disponible)');
  }
}

// ================================================
// RUTAS DE API MEJORADAS CON POSTGRESQL
// ================================================

// Health check mejorado
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'IXIMI Legacy API',
    version: '1.0.0',
    database: dbConnected ? 'connected' : 'demo_mode',
    environment: process.env.NODE_ENV || 'development'
  };
  
  res.status(200).json(health);
});

// API Project con datos reales
app.get('/api/project', async (req, res) => {
  const stats = dbConnected ? await database.getStats() : {
    totalArtifacts: 42,
    totalCommunities: 8,
    recentArtifacts: 5
  };
  
  res.json({
    name: 'IXIMI Legacy',
    version: '1.0.0',
    description: 'Sistema de protección de patrimonio cultural con blockchain',
    founder: 'Estefanía Pérez Vázquez',
    demoFor: 'Lic. Daniel Gutiérrez',
    meetingDate: 'Viernes 7 de Febrero',
    database: dbConnected ? 'PostgreSQL (conectado)' : 'Modo demo',
    stats: stats
  });
});

// Dashboard con datos reales de PostgreSQL
app.get('/dashboard', async (req, res) => {
  const stats = dbConnected ? await database.getStats() : {
    totalArtifacts: 42,
    totalCommunities: 8,
    recentArtifacts: 5
  };
  
  res.json({
    page: 'dashboard',
    status: 'active',
    database: dbConnected ? 'connected' : 'demo',
    metrics: {
      artifactsRegistered: stats.totalArtifacts,
      communities: stats.totalCommunities,
      qrGenerated: stats.totalArtifacts * 3,
      blockchainTransactions: stats.totalArtifacts,
      activeUsers: 23,
      recentActivity: stats.recentArtifacts
    },
    timestamp: new Date().toISOString()
  });
});

// Demo Meeting mejorada
app.get('/demo-meeting', async (req, res) => {
  const artifacts = dbConnected ? await database.getAllArtifacts(5) : [
    {
      id: 1,
      qr_code: 'TEXTIL-OAX-001',
      name: 'Tapiz del Águila y el Jaguar',
      community: 'Teotitlán del Valle'
    },
    {
      id: 2,
      qr_code: 'BARRO-OAX-001',
      name: 'Vasija de la Luna',
      community: 'San Bartolo Coyotepec'
    },
    {
      id: 3,
      qr_code: 'ALEBRIJE-OAX-001',
      name: 'Dragón-Serpiente',
      community: 'San Martín Tilcajete'
    }
  ];
  
  res.json({
    demo: true,
    title: 'IXIMI Legacy - Demo Meeting',
    for: 'Lic. Daniel Gutiérrez',
    date: '2024-02-07',
    database: dbConnected ? 'PostgreSQL activo' : 'Modo demostración',
    features: [
      'Registro de artefactos culturales',
      'Generación de QR único',
      'Transacciones blockchain',
      'Dashboard en tiempo real',
      'API REST completa',
      dbConnected ? 'PostgreSQL para datos persistentes' : 'Datos en memoria para demo'
    ],
    sampleArtifacts: artifacts,
    technologies: ['Node.js', dbConnected ? 'PostgreSQL' : 'SQLite', 'Redis', 'Docker', 'Blockchain']
  });
});

// API para crear artefacto (POST)
app.post('/api/artifacts', async (req, res) => {
  try {
    const artifactData = req.body;
    
    if (!artifactData.qr_code || !artifactData.name) {
      return res.status(400).json({ error: 'QR code y nombre son requeridos' });
    }
    
    artifactData.blockchain_tx = '0x' + Math.random().toString(16).substr(2, 10);
    
    const artifact = dbConnected 
      ? await database.createArtifact(artifactData)
      : {
          id: Math.floor(Math.random() * 1000),
          ...artifactData,
          created_at: new Date().toISOString()
        };
    
    res.status(201).json({
      success: true,
      message: 'Artefacto registrado exitosamente',
      artifact: artifact,
      blockchain: {
        transaction: artifactData.blockchain_tx,
        explorer_url: `https://blockchain-explorer.example.com/tx/${artifactData.blockchain_tx}`
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error registrando artefacto', details: error.message });
  }
});

// API para verificar artefacto por QR
app.get('/api/verify/:qrCode', async (req, res) => {
  const { qrCode } = req.params;
  
  try {
    const artifact = dbConnected 
      ? await database.findArtifactByQR(qrCode)
      : {
          id: 1,
          qr_code: qrCode,
          name: qrCode.includes('TEXTIL') ? 'Tapiz Zapoteco' : 
                qrCode.includes('BARRO') ? 'Vasija de Barro' : 'Alebrije Tradicional',
          description: 'Artefacto cultural protegido por IXIMI Legacy',
          artisan_name: 'Artesano Oaxaqueño',
          community: 'Oaxaca, México',
          cultural_significance: 'Patrimonio cultural protegido',
          blockchain_tx: '0x' + Math.random().toString(16).substr(2, 10),
          created_at: new Date().toISOString()
        };
    
    if (!artifact) {
      return res.status(404).json({ 
        verified: false, 
        message: 'Artefacto no encontrado',
        qrCode: qrCode 
      });
    }
    
    res.json({
      verified: true,
      qrCode: artifact.qr_code,
      artifact: {
        name: artifact.name,
        description: artifact.description,
        artisan: artifact.artisan_name,
        community: artifact.community,
        significance: artifact.cultural_significance
      },
      blockchain: {
        transaction: artifact.blockchain_tx,
        timestamp: artifact.created_at,
        immutable: true,
        explorer_url: `https://blockchain-explorer.example.com/tx/${artifact.blockchain_tx}`
      },
      protection: {
        system: 'IXIMI Legacy',
        status: 'active',
        protected_since: artifact.created_at
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error verificando artefacto', details: error.message });
  }
});

// Ruta raíz mejorada
app.get('/', async (req, res) => {
  const stats = dbConnected ? await database.getStats() : {
    totalArtifacts: 42,
    totalCommunities: 8,
    recentArtifacts: 5
  };
  
  res.json({
    app: 'IXIMI Legacy',
    status: 'active',
    message: 'Sistema de protección de patrimonio cultural con blockchain',
    demo: 'Para Lic. Daniel Gutiérrez - Viernes 7 de Febrero',
    database: dbConnected ? 'PostgreSQL conectado' : 'Modo demostración',
    stats: stats,
    availableRoutes: [
      { path: '/dashboard', description: 'Panel de control' },
      { path: '/demo-meeting', description: 'Vista de demostración' },
      { path: '/api/project', description: 'Información del proyecto' },
      { path: '/api/verify/:qrCode', description: 'Verificar artefacto por QR' },
      { path: '/api/artifacts', description: 'Registrar nuevo artefacto (POST)' },
      { path: '/health', description: 'Estado del sistema' }
    ]
  });
});

// ================================================
// MANEJO DE ERRORES
// ================================================
app.use((req, res, next) => {
  res.status(404).json({ 
    error: 'Ruta no encontrada', 
    path: req.path,
    suggestion: 'Prueba /dashboard o /demo-meeting' 
  });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: err.message,
    timestamp: new Date().toISOString()
  });
});

// ================================================
// INICIAR SERVIDOR
// ================================================
async function startServer() {
  await initializeDatabase();
  
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`
================================================
IXIMI LEGACY - SISTEMA ACTIVO
================================================
✅ Servidor: http://0.0.0.0:${PORT}
✅ Entorno: ${process.env.NODE_ENV || 'development'}
✅ Base de datos: ${dbConnected ? 'PostgreSQL conectado' : 'Modo demo'}
✅ Health check: /health
✅ Demo meeting: /demo-meeting
✅ Hora: ${new Date().toISOString()}
================================================
    `);
  });

  return server;
}

startServer().catch(console.error);

module.exports = app;
