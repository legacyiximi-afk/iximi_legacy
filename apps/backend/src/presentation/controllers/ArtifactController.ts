import { Request, Response } from 'express';

import { CreateArtifactUseCase } from '../../application/use-cases/CreateArtifactUseCase';
import { IArtifactRepository } from '../../domain/repositories/IArtifactRepository';

/**
 * Controlador para endpoints de artefactos
 */
export class ArtifactController {
  constructor(private artifactRepository: IArtifactRepository) {}

  /**
   * POST /api/artifacts
   * Crea un nuevo artefacto
   */
  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const useCase = new CreateArtifactUseCase(this.artifactRepository);
      
      // TODO: Obtener userId del token JWT
      const userId = req.body.userId || 'temp-user-id';

      const artifact = await useCase.execute({
        title: req.body.title,
        titleNative: req.body.titleNative,
        description: req.body.description,
        descriptionNative: req.body.descriptionNative,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        communityId: req.body.communityId,
        createdById: userId,
      });

      res.status(201).json({
        success: true,
        data: artifact.toJSON(),
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          success: false,
          error: error.message,
        });
      } else {
        res.status(500).json({
          success: false,
          error: 'Error interno del servidor',
        });
      }
    }
  };

  /**
   * GET /api/artifacts
   * Obtiene todos los artefactos
   */
  getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
      const artifacts = await this.artifactRepository.findAll();
      
      res.status(200).json({
        success: true,
        data: artifacts.map((a) => a.toJSON()),
        count: artifacts.length,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Error al obtener artefactos',
      });
    }
  };

  /**
   * GET /api/artifacts/:id
   * Obtiene un artefacto por ID
   */
  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const artifact = await this.artifactRepository.findById(id);

      if (!artifact) {
        res.status(404).json({
          success: false,
          error: 'Artefacto no encontrado',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: artifact.toJSON(),
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Error al obtener artefacto',
      });
    }
  };

  /**
   * GET /api/artifacts/community/:communityId
   * Obtiene artefactos de una comunidad
   */
  getByCommunity = async (req: Request, res: Response): Promise<void> => {
    try {
      const { communityId } = req.params;
      const artifacts = await this.artifactRepository.findByCommunityId(communityId);

      res.status(200).json({
        success: true,
        data: artifacts.map((a) => a.toJSON()),
        count: artifacts.length,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Error al obtener artefactos de la comunidad',
      });
    }
  };
}
