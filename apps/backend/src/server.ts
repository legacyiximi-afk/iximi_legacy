import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

import { PrismaArtifactRepository } from './infrastructure/database/PrismaArtifactRepository';
import { createArtifactRoutes } from './presentation/routes/artifactRoutes';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Clase principal del servidor
 */
class Server {
  private app: Application;
  private prisma: PrismaClient;

  constructor() {
    this.app = express();
    this.prisma = new PrismaClient();
    this.setupMiddlewares();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  /**
   * Configura middlewares
   */
  private setupMiddlewares(): void {
    // Seguridad
    this.app.use(helmet());
    
    // CORS
    this.app.use(
      cors({
        origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
        credentials: true,
      })
    );

    // Logging
    if (NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    } else {
      this.app.use(morgan('combined'));
    }

    // Body parsing
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  /**
   * Configura rutas
   */
  private setupRoutes(): void {
    // Health check
    this.app.get('/health', (_req: Request, res: Response) => {
      res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: NODE_ENV,
      });
    });

    // API routes
    const artifactRepository = new PrismaArtifactRepository(this.prisma);
    this.app.use('/api/artifacts', createArtifactRoutes(artifactRepository));

    // 404 handler
    this.app.use((_req: Request, res: Response) => {
      res.status(404).json({
        success: false,
        error: 'Ruta no encontrada',
      });
    });
  }

  /**
   * Configura manejo de errores global
   */
  private setupErrorHandling(): void {
    this.app.use(
      (
        err: Error,
        _req: Request,
        res: Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _next: express.NextFunction
      ) => {
        console.error('Error:', err);
        res.status(500).json({
          success: false,
          error: NODE_ENV === 'development' ? err.message : 'Error interno del servidor',
        });
      }
    );
  }

  /**
   * Inicia el servidor
   */
  public async start(): Promise<void> {
    try {
      // Conectar a la base de datos
      await this.prisma.$connect();
      console.log('✅ Conectado a la base de datos');

      // Iniciar servidor
      this.app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
        console.log(`📝 Entorno: ${NODE_ENV}`);
        console.log(`🌐 Health check: http://localhost:${PORT}/health`);
      });
    } catch (error) {
      console.error('❌ Error al iniciar el servidor:', error);
      process.exit(1);
    }
  }

  /**
   * Detiene el servidor gracefully
   */
  public async stop(): Promise<void> {
    await this.prisma.$disconnect();
    console.log('👋 Servidor detenido');
  }
}

// Iniciar servidor
const server = new Server();
void server.start();

// Manejo de señales de terminación
process.on('SIGINT', async () => {
  await server.stop();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await server.stop();
  process.exit(0);
});
