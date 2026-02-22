// Datos simulados (en producción vendrían de la BD)
const data = {
    metrics: {
        artifacts: { value: 42, label: 'Artefactos', trend: '+12%', trendIcon: 'up', trendClass: 'text-success' },
        communities: { value: 8, label: 'Comunidades', trend: '+5%', trendIcon: 'up', trendClass: 'text-success' },
        artisans: { value: 156, label: 'Artesanos', trend: '+23%', trendIcon: 'up', trendClass: 'text-success' },
        transactions: { value: 89, label: 'Transacciones', trend: '+8%', trendIcon: 'up', trendClass: 'text-success' }
    },
    
    features: [
        { icon: '<i class="fas fa-link"></i>', title: 'Registro Inmutable', description: 'Cada artefacto se registra en blockchain' },
        { icon: '<i class="fas fa-qrcode"></i>', title: 'Códigos QR Únicos', description: 'Identificación digital exclusiva' },
        { icon: '<i class="fas fa-shield-alt"></i>', title: 'Verificación Instantánea', description: 'Autenticidad en segundos' },
        { icon: '<i class="fas fa-chart-line"></i>', title: 'Dashboard Tiempo Real', description: 'Métricas actualizadas al momento' },
        { icon: '<i class="fas fa-history"></i>', title: 'Historial Completo', description: 'Trazabilidad desde el origen' },
        { icon: '<i class="fas fa-users"></i>', title: 'Comunidades Conectadas', description: 'Red de artesanos protegidos' }
    ],
    
    communities: [
        { name: 'San Pablo Villa de Mitla', slug: 'mitla', description: 'Textiles tradicionales zapotecas', artifacts: 15 },
        { name: 'Santa María Atzompa', slug: 'atzompa', description: 'Barro verde y cerámica', artifacts: 22 },
        { name: 'Teotitlán del Valle', slug: 'teotitlan', description: 'Tapetes ancestrales', artifacts: 5 },
        { name: 'Santo Tomás Jalieza', slug: 'jalieza', description: 'Bordados tradicionales', artifacts: 8 }
    ],
    
    artifacts: [
        { id: 1, qrCode: 'TEXTIL-MIT-001', name: 'Tapiz del Águila', community: 'Mitla', artisan: 'Familia Mendoza', date: '2026-02-01', status: 'Verificado', statusColor: 'success' },
        { id: 2, qrCode: 'CERAM-ATZ-001', name: 'Vasija Lunar', community: 'Atzompa', artisan: 'Doña Rosa', date: '2026-02-03', status: 'Verificado', statusColor: 'success' },
        { id: 3, qrCode: 'TEXTIL-TEO-001', name: 'Tapete Espiritual', community: 'Teotitlán', artisan: 'Jacobo Ángeles', date: '2026-02-05', status: 'Pendiente', statusColor: 'warning' },
        { id: 4, qrCode: 'TEXTIL-JAL-001', name: 'Huipil Ceremonial', community: 'Jalieza', artisan: 'Abuela Sofía', date: '2026-02-07', status: 'Verificado', statusColor: 'success' }
    ]
};

exports.getHome = (req, res) => {
    res.render('pages/home', {
        title: 'Inicio | IXIMI Legacy',
        active: { home: true },
        metrics: {
            artifacts: data.metrics.artifacts.value,
            communities: data.metrics.communities.value,
            artisans: data.metrics.artisans.value,
            transactions: data.metrics.transactions.value
        },
        features: data.features,
        communities: data.communities
    });
};

exports.getDashboard = (req, res) => {
    res.render('pages/dashboard', {
        title: 'Dashboard | IXIMI Legacy',
        active: { dashboard: true },
        metrics: data.metrics,
        communities: data.communities,
        artifacts: data.artifacts
    });
};

exports.getQrGenerator = (req, res) => {
    res.render('pages/qr-generator', {
        title: 'Generador QR | IXIMI Legacy',
        active: { qr: true },
        communities: data.communities
    });
};

exports.getArtesanos = (req, res) => {
    res.render('pages/artesanos', {
        title: 'Artesanos | IXIMI Legacy',
        active: { artesanos: true }
    });
};

exports.getArtefactos = (req, res) => {
    res.render('pages/artefactos', {
        title: 'Artefactos | IXIMI Legacy',
        active: { artefactos: true },
        artifacts: data.artifacts
    });
};

exports.getCommunity = (req, res) => {
    const slug = req.params.slug;
    const community = data.communities.find(c => c.slug === slug);
    
    if (!community) {
        return res.status(404).render('pages/404', { title: 'No encontrado' });
    }
    
    res.render('pages/comunidad', {
        title: `${community.name} | IXIMI Legacy`,
        active: { comunidades: true },
        community: community,
        artifacts: data.artifacts.filter(a => a.community.toLowerCase() === community.slug)
    });
};

exports.getContacto = (req, res) => {
    res.render('pages/contacto', {
        title: 'Contacto | IXIMI Legacy',
        active: { contacto: true }
    });
};

// API endpoints
exports.apiMetrics = (req, res) => {
    res.json({
        success: true,
        data: data.metrics
    });
};

exports.apiGenerateQR = (req, res) => {
    const { type, name, community, artisan, description, registerBlockchain } = req.body;
    
    // Generar código QR único
    const qrCode = `${type}-${community}-${Date.now()}`.toUpperCase();
    
    // Generar URL de verificación profesional
    const verificationUrl = `https://skillful-freedom-production-1872.up.railway.app/verify/${qrCode}`;
    
    // Si registra en blockchain, generar hash
    const txHash = registerBlockchain ? 
        '0x' + Math.random().toString(16).substring(2, 42) : null;
    
    res.json({
        success: true,
        data: {
            qrCode,
            verificationUrl,
            qrImage: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${verificationUrl}`,
            blockchain: txHash ? {
                registered: true,
                transaction: txHash,
                network: 'Polygon',
                timestamp: new Date().toISOString()
            } : { registered: false }
        }
    });
};

// Lógica de verificación de certificado
exports.verifyCertificate = (req, res) => {
    const qrCode = req.params.qrCode;
    
    // Buscar el artefacto en los datos (usando el objeto 'data' definido al inicio del controlador)
    const artifact = data.artifacts.find(a => a.qrCode.toUpperCase() === qrCode.toUpperCase());
    
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
};
