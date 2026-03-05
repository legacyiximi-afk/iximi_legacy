const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const mainRoutes = require('../routes/mainRoutes');
const database = require('../config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar Handlebars
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials'),
    defaultLayout: 'main',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/', mainRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'IXIMI Legacy Platform',
        version: '3.0.0',
        timestamp: new Date().toISOString(),
        database: database.dbConnected ? 'connected' : 'disconnected',
    });
});

// 404
app.use((req, res) => {
    res.status(404).render('pages/404', {
        title: 'Página no encontrada',
    });
});

// Iniciar servidor y base de datos
async function startServer() {
    await database.testConnection();
    app.listen(PORT, '0.0.0.0', () => {
        console.log('\n================================================');
        console.log('IXIMI LEGACY - SISTEMA ACTIVO');
        console.log('================================================');
        console.log(`✅ Servidor: http://0.0.0.0:${PORT}`);
        console.log(`✅ Entorno: ${process.env.NODE_ENV || 'development'}`);
        console.log(`✅ Base de datos: ${database.dbConnected ? 'PostgreSQL conectado' : 'Modo demo'}`);
        console.log('✅ Health check: /api/health');
        console.log(`✅ Hora: ${new Date().toISOString()}`);
        console.log('================================================\n');
    });
}

startServer().catch(console.error);
