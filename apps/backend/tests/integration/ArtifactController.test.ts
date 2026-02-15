import request from 'supertest';
import express, { Application } from 'express';
import { ArtifactController } from '../../src/presentation/controllers/ArtifactController';
import { IArtifactRepository } from '../../src/domain/repositories/IArtifactRepository';
import { Artifact, BlockchainStatus } from '../../src/domain/entities/Artifact';

// Mock del repositorio
const mockArtifactRepository: jest.Mocked<IArtifactRepository> = {
  save: jest.fn(),
  findById: jest.fn(),
  findByCommunityId: jest.fn(),
  findAll: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  countByCommunity: jest.fn(),
  countVerified: jest.fn(),
};

describe('ArtifactController Integration', () => {
  let app: Application;
  let controller: ArtifactController;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    controller = new ArtifactController(mockArtifactRepository);
    
    app.post('/api/artifacts', controller.create);
    app.get('/api/artifacts', controller.getAll);
    app.get('/api/artifacts/:id', controller.getById);
  });

  describe('POST /api/artifacts', () => {
    it('debe crear un artefacto exitosamente', async () => {
      const artifactData = {
        title: 'Test Artifact',
        description: 'Test Description',
        category: 'Test Category',
        communityId: 'comm-1',
      };

      const mockArtifact = Artifact.create({
        ...artifactData,
        createdById: 'temp-user-id',
        blockchainStatus: BlockchainStatus.PENDING,
        verified: false,
      });

      mockArtifactRepository.save.mockResolvedValue(mockArtifact);

      const response = await request(app)
        .post('/api/artifacts')
        .send(artifactData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(artifactData.title);
    });

    it('debe retornar 400 si faltan datos requeridos', async () => {
      const response = await request(app)
        .post('/api/artifacts')
        .send({ title: '' });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/artifacts', () => {
    it('debe retornar todos los artefactos', async () => {
      const mockArtifacts = [
        Artifact.create({
          title: 'Art 1',
          description: 'Desc 1',
          category: 'Cat 1',
          communityId: 'comm-1',
          createdById: 'user-1',
          blockchainStatus: BlockchainStatus.PENDING,
          verified: false,
        })
      ];

      mockArtifactRepository.findAll.mockResolvedValue(mockArtifacts);

      const response = await request(app).get('/api/artifacts');

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveLength(1);
    });
  });
});
