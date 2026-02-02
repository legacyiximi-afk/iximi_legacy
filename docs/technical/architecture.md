# Arquitectura del Sistema - IXIMI Legacy

## Visión General

Arquitectura basada en microservicios con blockchain para alta disponibilidad, escalabilidad y seguridad.

## Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────┐
│                 Frontend (React/Next.js)            │
│   • Dashboard administración                        │
│   • Interfaz artesanos                              │
│   • Verificador QR móvil                            │
│   • Portal comercios                                │
└──────────────────────────┬──────────────────────────┘
                           │ HTTPS/REST API
┌──────────────────────────▼──────────────────────────┐
│                Backend (Node.js/Express)            │
│   • API RESTful v1                                  │
│   • Autenticación JWT                               │
│   • Gestión de usuarios y permisos                  │
│   • Lógica de negocio                               │
└──────────────────────────┬──────────────────────────┘
                           │ Blockchain Layer
┌──────────────────────────▼──────────────────────────┐
│              Blockchain (Polygon/Matic)             │
│   • Smart contracts de certificación                │
│   • Distribución automática de regalías             │
│   • Registro inmutable de transacciones             │
└──────────────────────────┬──────────────────────────┘
                           │ Storage Layer
┌──────────────────────────▼──────────────────────────┐
│                Base de Datos (PostgreSQL)           │
│   • Datos de usuarios y artesanos                   │
│   • Registro de textiles y certificaciones          │
│   • Historial de transacciones y regalías           │
└─────────────────────────────────────────────────────┘
```

## Componentes Principales

### 1. Frontend

**Tecnología**: React 18, TypeScript, TailwindCSS

**Características**:
- Dashboard administrativo en tiempo real
- Interfaz móvil para verificación QR
- Portal de registro para artesanos
- Panel de control para comercios

### 2. Backend API

**Tecnología**: Node.js, Express, TypeScript

**Características**:
- API RESTful con versionamiento
- Autenticación JWT con refresh tokens
- Rate limiting y protección DDoS
- Logging centralizado y monitoreo

### 3. Blockchain Integration

**Red**: Polygon (Matic) - layer 2 de Ethereum

**Smart Contracts**:
- `CertificacionDigital.sol`: Registro de textiles
- `DistribucionRegalias.sol`: Pago automático
- `VerificacionQR.sol`: Validación de autenticidad

**Características**:
- Bajo costo de transacciones
- Confirmación rápida (2-3 segundos)
- Compatible con estándares ERC-721/1155

### 4. Base de Datos

- **Primaria**: PostgreSQL 15
- **Cache**: Redis 7
- **Almacenamiento archivos**: IPFS + S3 compatible

**Características**:
- Replicación para alta disponibilidad
- Backup automático diario
- Encriptación de datos sensibles

### 5. Infraestructura

- **Contenedores**: Docker + Docker Compose
- **Orquestación**: Kubernetes (para producción)
- **CI/CD**: GitHub Actions
- **Monitoreo**: Prometheus + Grafana
- **Logging**: ELK Stack

---

## Especificaciones Técnicas

### Rendimiento

| Métrica | Valor |
|---------|-------|
| Disponibilidad | 99.9% (24/7/365) |
| Tiempo de respuesta API | < 200ms (p95) |
| Capacidad concurrente | 10,000 usuarios |
| Transacciones/día | 1,000,000+ |
| Almacenamiento | Escalable horizontalmente |

### Seguridad

- **Certificaciones**: ISO 27001, GDPR compliance
- **Encriptación**: TLS 1.3, datos en reposo
- **Autenticación**: MFA, OAuth 2.0
- **Auditoría**: Pentesting trimestral

### Escalabilidad

- **Auto-scaling**: Basado en métricas de carga
- **CDN**: Distribución global de estáticos
- **Cache distribuido**: Redis Cluster
- **Balanceo de carga**: Round-robin con health checks

---

## Flujos de Trabajo Principales

### 1. Registro de Textil

```
1. Artesano sube diseño + metadatos
2. Validación automática de datos
3. Registro en blockchain (transacción)
4. Generación de certificado digital
5. Creación de código QR único
6. Notificación al artesano
```

### 2. Verificación de Autenticidad

```
1. Consumidor escanea código QR
2. Consulta a API de verificación
3. Validación en blockchain
4. Retorno de certificado digital
5. Registro de verificación
```

### 3. Distribución de Regalías

```
1. Venta de producto certificado
2. Sistema calcula regalías (5-15%)
3. Transacción en blockchain (smart contract)
4. Distribución automática a wallet del artesano
5. Confirmación y notificación
```

---

## Deployment

### Ambiente de Desarrollo

```bash
# Iniciar todos los servicios
docker-compose up -d

# Ejecutar migraciones
npm run migrate

# Iniciar aplicación
npm run dev
```

### Ambiente de Producción

```bash
# Usar script de despliegue
./scripts/deploy/production.sh

# O manualmente con orquestación
kubectl apply -f k8s/
```

---

## Monitoreo y Métricas

### Métricas Clave

1. Disponibilidad del sistema: 99.9%
2. Tiempo de respuesta API: < 200ms
3. Transacciones blockchain: Confirmación < 30s
4. Regalías distribuidas: Total y por comunidad
5. Satisfacción de usuarios: Encuestas trimestrales

### Dashboard de Monitoreo

- **URL**: http://monitoring.iximilegacy.org
- **Acceso**: Credenciales separadas
- **Alertas**: Configuradas para métricas críticas

---

## Mantenimiento

### Tareas Programadas

| Frecuencia | Tarea |
|------------|-------|
| Diario | Backup, limpieza de logs, health checks |
| Semanal | Actualización de dependencias, optimización DB |
| Mensual | Auditoría de seguridad, revisión de métricas |
| Trimestral | Pentesting, actualización de documentación |

### Soporte Técnico

- **Horario**: 24/7 para incidentes críticos
- **Contacto**: soporte@iximilegacy.org
- **SLA**: Resolución de incidentes críticos en < 4 horas
