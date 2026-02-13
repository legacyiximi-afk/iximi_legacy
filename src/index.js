const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const mainRoutes = require('../routes/mainRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar Handlebars
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials'),
    defaultLayout: 'main'
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
        timestamp: new Date().toISOString()
    });
});

// Página de demo (mantener compatibilidad)
app.get('/demo-meeting', (req, res) => {
    res.redirect('/');
});

// 404
app.use((req, res) => {
    res.status(404).render('pages/404', {
        title: 'Página no encontrada'
    });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log('');
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║  🧬 IXIMI LEGACY - PLATAFORMA PROFESIONAL                ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log(`✅ Puerto: ${PORT}`);
    console.log(`✅ Página principal: http://localhost:${PORT}`);
    console.log(`✅ Dashboard: http://localhost:${PORT}/dashboard`);
    console.log(`✅ Generador QR: http://localhost:${PORT}/qr-generator`);
    console.log('');
});
