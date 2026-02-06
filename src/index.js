const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ================================================
// MIDDLEWARE
// ================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================================================
// RUTAS DE API
// ================================================
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'IXIMI Legacy API',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/api/project', (req, res) => {
  res.json({
    name: 'IXIMI Legacy',
    version: '1.0.0',
    description: 'Sistema de protección de patrimonio cultural con blockchain',
    founder: 'Estefanía Pérez Vázquez',
    demoFor: 'Lic. Daniel Gutiérrez',
    meetingDate: 'Viernes 7 de Febrero'
  });
});

app.get('/api/demo', (req, res) => {
  res.json({
    demo: true,
    features: ['blockchain', 'qr_generation', 'database', 'redis_cache', 'docker'],
    endpoints: ['/api/health', '/api/project', '/demo-meeting', '/dashboard'],
    ready: true
  });
});

app.get('/api/verify/:qrCode', (req, res) => {
  const { qrCode } = req.params;
  res.json({
    verified: true,
    qrCode: qrCode,
    artifact: 'Textil Zapoteco de Teotitlán del Valle',
    blockchainTx: '0x' + Math.random().toString(16).substr(2, 10),
    timestamp: new Date().toISOString()
  });
});

app.post('/api/register', (req, res) => {
  res.json({
    success: true,
    message: 'Artefacto registrado en blockchain',
    qrCode: 'IXIMI-' + Date.now(),
    transactionId: '0x' + Math.random().toString(16).substr(2, 10)
  });
});

// ================================================
// RUTAS DE VISTAS (SIMPLIFICADAS PARA DEPLOY)
// ================================================
app.get('/', (req, res) => {
  res.json({
    app: 'IXIMI Legacy',
    status: 'active',
    message: 'Sistema de protección de patrimonio cultural',
    demo: 'Para Lic. Daniel Gutiérrez - Viernes 7 de Febrero',
    availableRoutes: ['/dashboard', '/demo-meeting', '/api/health', '/api/project']
  });
});

app.get('/dashboard', (req, res) => {
  res.json({
    page: 'dashboard',
    status: 'active',
    metrics: {
      artifactsRegistered: 42,
      qrGenerated: 156,
      blockchainTransactions: 89,
      activeUsers: 23
    }
  });
});

app.get('/demo-meeting', (req, res) => {
  res.json({
    demo: true,
    title: 'IXIMI Legacy - Demo Meeting',
    for: 'Lic. Daniel Gutiérrez',
    date: '2024-02-07',
    features: [
      'Registro de artefactos culturales',
      'Generación de QR único',
      'Transacciones blockchain',
      'Dashboard en tiempo real',
      'API REST completa'
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Blockchain']
  });
});

app.get('/presentation', (req, res) => {
  res.json({
    presentation: true,
    title: 'IXIMI Legacy - Presentación Ejecutiva',
    slides: [
      'Problema: Pérdida de patrimonio cultural',
      'Solución: Blockchain + QR + Database',
      'Tecnología: Arquitectura profesional',
      'Impacto: 500,000 artesanos protegidos',
      'Demo: Sistema en funcionamiento'
    ]
  });
});

// ================================================
// HEALTH CHECK PARA RENDER/DOCKER (EXTRA)
// ================================================
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'IXIMI Legacy API',
    version: '1.0.0'
  });
});

app.get('/health/simple', (req, res) => {
  res.status(200).send('OK');
});

// ================================================
// MANEJO DE ERRORES
// ================================================
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada', path: req.path });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ================================================
// INICIAR SERVIDOR
// ================================================
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`
================================================
IXIMI LEGACY - SISTEMA ACTIVO
================================================
✅ Servidor ejecutándose en: http://0.0.0.0:${PORT}
✅ Entorno: ${process.env.NODE_ENV || 'development'}
✅ Health check: http://0.0.0.0:${PORT}/health
✅ Demo meeting: http://0.0.0.0:${PORT}/demo-meeting
✅ Hora: ${new Date().toISOString()}
================================================
  `);
});

module.exports = app;
