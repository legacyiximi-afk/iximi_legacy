// IXIMI Legacy - Servidor Principal
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware básico
app.use(express.json());

// ==================== HEALTH CHECK ====================
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'IXIMI Legacy API',
        version: '2.0.0',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        endpoints: ['/', '/demo-meeting', '/api/health', '/dashboard']
    });
});

// ==================== PÁGINA DEMO-MEETING (CORREGIDA) ====================
app.get('/demo-meeting', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>IXIMI Legacy - Demo Meeting</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: 'Segoe UI', Arial, sans-serif; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                min-height: 100vh;
                padding: 20px;
            }
            .container { 
                max-width: 1200px; 
                margin: 0 auto; 
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 40px;
            }
            .header { text-align: center; margin-bottom: 40px; }
            h1 { 
                color: #FFD700; 
                font-size: 3em; 
                margin-bottom: 10px;
                font-family: 'Georgia', serif;
            }
            .presenter { 
                background: rgba(0,0,0,0.3); 
                padding: 25px; 
                border-radius: 15px; 
                margin: 30px 0;
                text-align: center;
            }
            .stats { 
                display: grid; 
                grid-template-columns: repeat(4, 1fr); 
                gap: 20px; 
                margin: 40px 0;
            }
            .stat { 
                background: rgba(255,255,255,0.2); 
                padding: 25px; 
                border-radius: 15px; 
                text-align: center;
                transition: transform 0.3s;
            }
            .stat:hover { transform: translateY(-5px); }
            .number { 
                font-size: 2.8em; 
                font-weight: bold; 
                color: #FFD700; 
                margin-bottom: 5px;
            }
            .features { 
                display: grid; 
                grid-template-columns: repeat(3, 1fr); 
                gap: 25px;
                margin: 50px 0;
            }
            .feature { 
                background: rgba(255,255,255,0.15); 
                padding: 30px; 
                border-radius: 15px;
                text-align: center;
            }
            .feature h3 { color: #FFD700; margin: 15px 0 10px; }
            .feature-icon { font-size: 2.5em; }
            .qr-examples {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                margin: 40px 0;
            }
            .qr-card {
                background: white;
                color: #333;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
            }
            .qr-code {
                font-family: monospace;
                background: #f0f0f0;
                padding: 10px;
                border-radius: 5px;
                margin: 10px 0;
            }
            .footer {
                text-align: center;
                margin-top: 50px;
                padding-top: 30px;
                border-top: 1px solid rgba(255,255,255,0.2);
            }
            @media (max-width: 768px) {
                .stats { grid-template-columns: repeat(2, 1fr); }
                .features { grid-template-columns: 1fr; }
                .qr-examples { grid-template-columns: 1fr; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🧬 IXIMI Legacy</h1>
                <p style="font-size: 1.3em; opacity: 0.9;">Protección de Patrimonio Cultural con Blockchain</p>
            </div>
            
            <div class="presenter">
                <h2 style="color: #FFD700; margin-bottom: 15px;">🎯 Reunión con Lic. Daniel Gutiérrez</h2>
                <p style="font-size: 1.2em;"><strong>Presenta:</strong> Estefanía Pérez Vázquez</p>
                <p style="font-size: 1.1em;"><strong>Fundadora y Desarrolladora Principal</strong></p>
                <p style="margin-top: 10px;">📧 legacyiximi@gmail.com</p>
                <p style="margin-top: 5px;">📅 Viernes 7 de Febrero</p>
            </div>
            
            <div class="stats">
                <div class="stat">
                    <div class="number">42</div>
                    <div>Artefactos Protegidos</div>
                </div>
                <div class="stat">
                    <div class="number">8</div>
                    <div>Comunidades</div>
                </div>
                <div class="stat">
                    <div class="number">156</div>
                    <div>Artesanos Conectados</div>
                </div>
                <div class="stat">
                    <div class="number">89</div>
                    <div>Transacciones Blockchain</div>
                </div>
            </div>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">🔗</div>
                    <h3>Registro Inmutable</h3>
                    <p>Cada artefacto se registra en blockchain creando un historial imborrable</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">📱</div>
                    <h3>Códigos QR Únicos</h3>
                    <p>Generación de códigos QR personalizados para cada artefacto</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">✅</div>
                    <h3>Verificación Instantánea</h3>
                    <p>Cualquier persona puede verificar la autenticidad escaneando el QR</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">📊</div>
                    <h3>Dashboard en Tiempo Real</h3>
                    <p>Métricas y estadísticas actualizadas al momento</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">📜</div>
                    <h3>Historia del Artefacto</h3>
                    <p>Registro completo del ciclo de vida de cada pieza</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🏘️</div>
                    <h3>Comunidades Conectadas</h3>
                    <p>Red de artesanos oaxaqueños protegidos por el sistema</p>
                </div>
            </div>
            
            <h2 style="text-align: center; margin: 40px 0 20px;">📱 Ejemplos de Códigos QR</h2>
            <div class="qr-examples">
                <div class="qr-card">
                    <div><strong>TEXTIL-OAX-001</strong></div>
                    <div class="qr-code">██████<br>█    █<br>█  ███  █<br>█    █<br>██████</div>
                    <div>Tapiz del Águila y el Jaguar</div>
                    <div style="color: green; margin-top: 10px;">✅ Verificado</div>
                </div>
                <div class="qr-card">
                    <div><strong>BARRO-OAX-001</strong></div>
                    <div class="qr-code">██████<br>█    █<br>█  ███  █<br>█    █<br>██████</div>
                    <div>Vasija de la Luna</div>
                    <div style="color: green; margin-top: 10px;">✅ Verificado</div>
                </div>
                <div class="qr-card">
                    <div><strong>ALEBRIJE-OAX-001</strong></div>
                    <div class="qr-code">██████<br>█    █<br>█  ███  █<br>█    █<br>██████</div>
                    <div>Dragón-Serpiente</div>
                    <div style="color: orange; margin-top: 10px;">⏳ Pendiente</div>
                </div>
            </div>
            
            <div class="footer">
                <h3 style="color: #FFD700;">🎯 Tecnología</h3>
                <p>Node.js | Express | PostgreSQL | Redis | Ethereum | Railway</p>
                <p style="margin-top: 20px;"><strong>Contacto:</strong> legacyiximi@gmail.com</p>
                <p style="margin-top: 30px; opacity: 0.8;">IXIMI Legacy - Tecnología que teje justicia para México</p>
            </div>
        </div>
        
        <script>
            // Animación de números
            document.addEventListener('DOMContentLoaded', () => {
                const numbers = document.querySelectorAll('.number');
                numbers.forEach(num => {
                    const target = parseInt(num.textContent);
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            num.textContent = target;
                            clearInterval(timer);
                        } else {
                            num.textContent = Math.floor(current);
                        }
                    }, 30);
                });
            });
        </script>
    </body>
    </html>
    `;
    res.send(html);
});

// ==================== DASHBOARD SIMPLE ====================
app.get('/dashboard', (req, res) => {
    res.json({
        page: 'dashboard',
        status: 'active',
        metrics: {
            artifacts: 42,
            qrCodes: 156,
            transactions: 89,
            communities: 8
        }
    });
});

// ==================== API DEMO (para no perder funcionalidad) ====================
app.get('/api/demo', (req, res) => {
    res.json({
        demo: true,
        title: "IXIMI Legacy - Demo Meeting",
        presenter: {
            name: "Estefanía Pérez Vázquez",
            role: "Fundadora y Desarrolladora Principal",
            email: "legacyiximi@gmail.com"
        },
        summary: {
            artifactsProtected: 42,
            communitiesServed: 8,
            artisansConnected: 156,
            transactionsRecorded: 89
        },
        message: "Para ver la página HTML, visita /demo-meeting"
    });
});

// ==================== REDIRECCIÓN PRINCIPAL ====================
app.get('/', (req, res) => {
    res.redirect('/demo-meeting');
});

// ==================== INICIAR SERVIDOR ====================
app.listen(PORT, '0.0.0.0', () => {
    console.log('');
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║  🧬 IXIMI LEGACY - SERVIDOR INICIADO CORRECTAMENTE       ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log(`✅ Puerto: ${PORT}`);
    console.log(`✅ Página principal: http://localhost:${PORT}/demo-meeting`);
    console.log(`✅ API Demo (JSON): http://localhost:${PORT}/api/demo`);
    console.log(`✅ Health Check: http://localhost:${PORT}/api/health`);
    console.log('');
    console.log('📱 PARA VER LA PÁGINA CORRECTA:');
    console.log(`   http://localhost:${PORT}/demo-meeting`);
    console.log('');
});
