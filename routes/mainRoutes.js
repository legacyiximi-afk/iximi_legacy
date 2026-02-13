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
