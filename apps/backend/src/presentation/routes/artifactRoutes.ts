import { Router } from 'express';

import { ArtifactController } from '../controllers/ArtifactController';
import { IArtifactRepository } from '../../domain/repositories/IArtifactRepository';

/**
 * Configura las rutas de artefactos
 */
export function createArtifactRoutes(
  artifactRepository: IArtifactRepository
): Router {
  const router = Router();
  const controller = new ArtifactController(artifactRepository);

  // Rutas públicas
  router.get('/', controller.getAll);
  router.get('/:id', controller.getById);
  router.get('/community/:communityId', controller.getByCommunity);

  // Rutas protegidas (requieren autenticación)
  // TODO: Agregar middleware de autenticación
  router.post('/', controller.create);

  return router;
}
