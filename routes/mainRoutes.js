const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

// Páginas principales
router.get('/', controller.getHome);
router.get('/dashboard', controller.getDashboard);
router.get('/qr-generator', controller.getQrGenerator);
router.get('/artesanos', controller.getArtesanos);
router.get('/artefactos', controller.getArtefactos);
router.get('/comunidades/:slug', controller.getCommunity);
router.get('/contacto', controller.getContacto);

// API endpoints
router.get('/api/metrics', controller.apiMetrics);
router.post('/api/generate-qr', controller.apiGenerateQR);

module.exports = router;

// Ruta de la fundadora
router.get('/fundadora', (req, res) => {
    res.render('pages/fundadora', {
        title: 'Conoce a la Fundadora | IXIMI Legacy',
        active: { fundadora: true }
    });
});

// Ruta de la fundadora
router.get('/fundadora', (req, res) => {
    res.render('pages/fundadora', {
        title: 'Conoce a la Fundadora | IXIMI Legacy',
        active: { fundadora: true }
    });
});

// Ruta de verificación de certificado (para escaneo de QR)
router.get('/verify/:qrCode', (req, res) => {
    const qrCode = req.params.qrCode;
    
    // Buscar el artefacto en los datos
    const artifact = data.artifacts.find(a => a.qrCode === qrCode);
    
    if (!artifact) {
        return res.status(404).render('pages/404', {
            title: 'Certificado no encontrado'
        });
    }
    
    res.render('pages/verify-certificate', {
        title: `Verificar: ${artifact.name} | IXIMI Legacy`,
        active: { verify: true },
        qrCode: artifact.qrCode,
        name: artifact.name,
        artisan: artifact.artisan,
        community: artifact.community,
        date: artifact.date,
        timestamp: new Date().toLocaleString('es-MX')
    });
});
