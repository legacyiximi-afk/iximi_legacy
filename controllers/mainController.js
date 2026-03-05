const database = require('../config/database');
const qrcode = require('qrcode');

// --- Renderizar Páginas --- //

// Página de Inicio
exports.getHome = async (req, res) => {
    try {
        const stats = await database.getStats();
        const communities = await database.getAllCommunities();
        res.render('pages/home', {
            title: 'Inicio | IXIMI Legacy',
            active: { home: true },
            metrics: {
                artifacts: stats.totalArtifacts,
                communities: stats.totalCommunities,
                artisans: 156, // Dato estático temporal
                transactions: stats.totalArtifacts, // Asumiendo una transacción por artefacto
            },
            communities: communities.map(c => ({ name: c.community, slug: c.community.toLowerCase().replace(/\s+/g, '-') })),
        });
    } catch (error) {
        console.error('Error en getHome:', error);
        res.status(500).render('pages/404');
    }
};

// Dashboard
exports.getDashboard = async (req, res) => {
    try {
        const stats = await database.getStats();
        const artifacts = await database.getAllArtifacts(20);
        res.render('pages/dashboard', {
            title: 'Dashboard | IXIMI Legacy',
            active: { dashboard: true },
            metrics: {
                artifacts: { value: stats.totalArtifacts },
                communities: { value: stats.totalCommunities },
                artisans: { value: 156 }, // Dato estático temporal
                transactions: { value: stats.totalArtifacts },
            },
            artifacts: artifacts.map(a => ({ ...a, status: 'Verificado', statusColor: 'success' })),
        });
    } catch (error) {
        console.error('Error en getDashboard:', error);
        res.status(500).render('pages/404');
    }
};

// Generador QR
exports.getQrGenerator = async (req, res) => {
    try {
        const communities = await database.getAllCommunities();
        res.render('pages/qr-generator', {
            title: 'Generador QR | IXIMI Legacy',
            active: { qr: true },
            communities: communities.map(c => c.community),
        });
    } catch (error) {
        console.error('Error en getQrGenerator:', error);
        res.status(500).render('pages/404');
    }
};

// Página de Artefactos
exports.getArtefactos = async (req, res) => {
    try {
        const artifacts = await database.getAllArtifacts(100);
        res.render('pages/artefactos', {
            title: 'Artefactos | IXIMI Legacy',
            active: { artefactos: true },
            artifacts: artifacts.map(a => ({ ...a, status: 'Verificado', statusColor: 'success' })),
        });
    } catch (error) {
        console.error('Error en getArtefactos:', error);
        res.status(500).render('pages/404');
    }
};

// --- API Endpoints --- //

// Generar QR
exports.apiGenerateQR = async (req, res) => {
    const { name, community, artisan_name, description } = req.body;
    if (!name || !community) {
        return res.status(400).json({ success: false, message: 'Nombre y comunidad son requeridos.' });
    }

    try {
        const qr_code = `IXIMI-${community.substring(0, 3).toUpperCase()}-${Date.now()}`;
        const verificationUrl = `${req.protocol}://${req.get('host')}/verify/${qr_code}`;

        const newArtifact = {
            qr_code,
            name,
            description,
            artisan_name,
            community,
            cultural_significance: '', // Campo a ser llenado después
            blockchain_tx: '0x' + require('crypto').randomBytes(20).toString('hex'), // Simulado
        };

        await database.createArtifact(newArtifact);
        const qrImage = await qrcode.toDataURL(verificationUrl);

        res.json({
            success: true,
            data: {
                qrCode: qr_code,
                verificationUrl,
                qrImage,
                blockchain: { registered: true, transaction: newArtifact.blockchain_tx },
            },
        });
    } catch (error) {
        console.error('Error en apiGenerateQR:', error);
        res.status(500).json({ success: false, message: 'Error generando el código QR.' });
    }
};

// Verificar Certificado
exports.verifyCertificate = async (req, res) => {
    try {
        const { qrCode } = req.params;
        const artifact = await database.findArtifactByQR(qrCode);

        if (!artifact) {
            return res.status(404).render('pages/404', { title: 'Certificado no encontrado' });
        }

        res.render('pages/verify-certificate', {
            title: `Verificar: ${artifact.name} | IXIMI Legacy`,
            active: { verify: true },
            qrCode: artifact.qr_code,
            name: artifact.name,
            artisan: artifact.artisan_name,
            community: artifact.community,
            date: new Date(artifact.created_at).toLocaleDateString('es-MX'),
            timestamp: new Date().toLocaleString('es-MX'),
        });
    } catch (error) {
        console.error('Error en verifyCertificate:', error);
        res.status(500).render('pages/404');
    }
};

// --- Páginas Estáticas (sin lógica de BD) --- //

exports.getArtesanos = (req, res) => {
    res.render('pages/artesanos', { title: 'Artesanos | IXIMI Legacy', active: { artesanos: true } });
};

exports.getCommunity = (req, res) => {
    res.status(501).send('Not Implemented'); // Lógica a implementar
};

exports.getContacto = (req, res) => {
    res.render('pages/contacto', { title: 'Contacto | IXIMI Legacy', active: { contacto: true } });
};

exports.apiMetrics = async (req, res) => {
    try {
        const stats = await database.getStats();
        res.json({ success: true, data: stats });
    } catch (_error) {
        res.status(500).json({ success: false, message: 'Error obteniendo métricas.' });
    }
};
