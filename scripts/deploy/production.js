/**
 * Script de Deploy para IXIMI Legacy - Producción
 * 
 * Este script automatiza el despliegue completo del sistema
 * incluyendo backend, base de datos y servicios relacionados.
 * 
 * Autor: Estefanía Pérez Vázquez
 * Email: legacyiximi@gmail.com
 * GitHub: @legacyiximi-afk
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

class DeployScript {
  constructor() {
    this.projectDir = path.resolve(__dirname, '../../');
    this.colors = {
      reset: '\x1b[0m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      red: '\x1b[31m',
      cyan: '\x1b[36m'
    };
  }

  log(message, color = 'cyan') {
    console.log(`${this.colors[color]}🚀 ${message}${this.colors.reset}`);
  }

  success(message) {
    console.log(`${this.colors.green}✅ ${message}${this.colors.reset}`);
  }

  warning(message) {
    console.log(`${this.colors.yellow}⚠️  ${message}${this.colors.reset}`);
  }

  error(message) {
    console.log(`${this.colors.red}❌ ${message}${this.colors.reset}`);
  }

  executeCommand(command, description) {
    this.log(`Ejecutando: ${description}`);
    try {
      execSync(command, { 
        cwd: this.projectDir,
        stdio: 'inherit' 
      });
      this.success(`${description} completado`);
      return true;
    } catch (error) {
      this.error(`${description} falló: ${error.message}`);
      return false;
    }
  }

  checkDocker() {
    this.log('Verificando Docker...', 'yellow');
    try {
      execSync('docker --version', { stdio: 'pipe' });
      execSync('docker-compose --version', { stdio: 'pipe' });
      this.success('Docker y Docker Compose están instalados');
      return true;
    } catch (error) {
      this.error('Docker o Docker Compose no están instalados');
      return false;
    }
  }

  checkFrontend() {
    const frontendDir = path.join(this.projectDir, 'frontend');
    if (!fs.existsSync(frontendDir)) {
      this.warning('Directorio frontend no encontrado, ajustando docker-compose.yml');
      return false;
    }
    return true;
  }

  fixDockerCompose() {
    const dockerComposePath = path.join(this.projectDir, 'docker-compose.yml');
    let content = fs.readFileSync(dockerComposePath, 'utf8');
    
    // Comentar el servicio frontend si no existe
    if (!fs.existsSync(path.join(this.projectDir, 'frontend'))) {
      content = content.replace(
        /(\s+)frontend:/g, 
        '$1# frontend: (desactivado - no existe directorio)'
      );
      content = content.replace(
        /(\s+)build:/g,
        '$1# build:'
      );
      content = content.replace(
        /(\s+)context: \.\/frontend/g,
        '$1# context: ./frontend'
      );
      content = content.replace(
        /(\s+)container_name: iximi-frontend/g,
        '$1# container_name: iximi-frontend'
      );
      content = content.replace(
        /(\s+)ports:/g,
        '$1# ports:'
      );
      content = content.replace(
        /(\s+)- "3001:3000"/g,
        '$1# - "3001:3000"'
      );
      content = content.replace(
        /(\s+)environment:/g,
        '$1# environment:'
      );
      content = content.replace(
        /(\s+)- NEXT_PUBLIC_API_URL=http:\/\/app:3000/g,
        '$1# - NEXT_PUBLIC_API_URL=http://app:3000'
      );
      content = content.replace(
        /(\s+)depends_on:/g,
        '$1# depends_on:'
      );
      content = content.replace(
        /(\s+)- app/g,
        '$1# - app'
      );
      content = content.replace(
        /(\s+)networks:/g,
        '$1# networks:'
      );
      content = content.replace(
        /(\s+)- iximi-network/g,
        '$1# - iximi-network'
      );
      content = content.replace(
        /(\s+)restart: unless-stopped/g,
        '$1# restart: unless-stopped'
      );
      
      fs.writeFileSync(dockerComposePath, content);
      this.success('docker-compose.yml ajustado');
    }
  }

  stopExistingContainers() {
    this.log('Deteniendo contenedores existentes...', 'yellow');
    try {
      execSync('docker-compose down', { 
        cwd: this.projectDir,
        stdio: 'pipe' 
      });
      this.success('Contenedores anteriores detenido');
    } catch (error) {
      this.warning('No había contenedores anteriores ejecutándose');
    }
  }

  buildImages() {
    this.log('Construyendo imágenes Docker...', 'yellow');
    return this.executeCommand(
      'docker-compose build',
      'Construcción de imágenes'
    );
  }

  startServices() {
    this.log('Iniciando servicios...', 'yellow');
    return this.executeCommand(
      'docker-compose up -d',
      'Inicio de servicios'
    );
  }

  waitForServices() {
    this.log('Esperando que los servicios estén listos...', 'yellow');
    const maxRetries = 30;
    let retries = 0;
    
    while (retries < maxRetries) {
      try {
        const result = execSync(
          'curl -s http://localhost:3000/api/health || echo "not ready"',
          { stdio: 'pipe' }
        ).toString();
        
        if (result.includes('healthy')) {
          this.success('Servidor principal está saludable');
          return true;
        }
      } catch (error) {
        // Servicio aún no disponible
      }
      
      retries++;
      process.stdout.write('.');
      require('child_process').execSync('sleep 1');
    }
    
    console.log('');
    this.warning('Servidor principal aún no responde completamente');
    return true;
  }

  showDeploymentInfo() {
    console.log(`
${this.colors.cyan}========================================${this.colors.reset}
${this.colors.cyan}  DEPLOY DE IXIMI LEGACY COMPLETADO${this.colors.reset}
${this.colors.cyan}========================================${this.colors.reset}

📊 INFORMACIÓN DEL DEPLOY:
   • Versión: 1.0.0
   • Entorno: Producción
   • Contenedores: app, db, redis

🌐 ENDPOINTS DISPONIBLES:
   • API Health: http://localhost:3000/api/health
   • API Project: http://localhost:3000/api/project
   • API Demo: http://localhost:3000/api/demo
   • Dashboard: http://localhost:3000/dashboard

📦 SERVICIOS:
   • App: http://localhost:3000 (Puerto 3000)
   • PostgreSQL: localhost:5432
   • Redis: localhost:6379

👩‍💻 FUNDADORA:
   • Estefanía Pérez Vázquez
   • Email: legacyiximi@gmail.com
   • GitHub: @legacyiximi-afk

${this.colors.cyan}========================================${this.colors.reset}
${this.colors.green}✅ Sistema desplegado exitosamente${this.colors.reset}
${this.colors.cyan}========================================${this.colors.reset}
    `);
  }

  deploy() {
    console.log(`
${this.colors.cyan}========================================${this.colors.reset}
${this.colors.cyan}    DEPLOY DE IXIMI LEGACY - PRODUCCIÓN${this.colors.reset}
${this.colors.cyan}========================================${this.colors.reset}
${this.colors.yellow}
👩‍💻 Fundadora: Estefanía Pérez Vázquez
📧 Email: legacyiximi@gmail.com
🐙 GitHub: @legacyiximi-afk${this.colors.reset}
    `);

    // Verificar Docker
    if (!this.checkDocker()) {
      this.error('Docker es requerido para el deploy');
      process.exit(1);
    }

    // Verificar y ajustar frontend
    this.checkFrontend();
    this.fixDockerCompose();

    // Detener contenedores existentes
    this.stopExistingContainers();

    // Construir imágenes
    if (!this.buildImages()) {
      this.error('Falló la construcción de imágenes');
      process.exit(1);
    }

    // Iniciar servicios
    if (!this.startServices()) {
      this.error('Falló el inicio de servicios');
      process.exit(1);
    }

    // Esperar a que los servicios estén listos
    this.waitForServices();

    // Mostrar información del deploy
    this.showDeploymentInfo();

    this.success('Deploy completado exitosamente');
  }
}

// Ejecutar deploy
const deploy = new DeployScript();
deploy.deploy();
