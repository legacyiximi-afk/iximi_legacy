import { CreateArtifactUseCase } from '../../src/application/use-cases/CreateArtifactUseCase';
import { IArtifactRepository } from '../../src/domain/repositories/IArtifactRepository';
import { Artifact } from '../../src/domain/entities/Artifact';

describe('CreateArtifactUseCase', () => {
  let useCase: CreateArtifactUseCase;
  let mockRepository: jest.Mocked<IArtifactRepository>;

  beforeEach(() => {
    mockRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      findByCommunityId: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      countByCommunity: jest.fn(),
      countVerified: jest.fn(),
    };
    useCase = new CreateArtifactUseCase(mockRepository);
  });

  it('debe crear un artefacto cuando los datos son válidos', async () => {
    const dto = {
      title: 'Nuevo Artefacto',
      description: 'Una descripción válida',
      category: 'Artesanía',
      communityId: 'comm-123',
      createdById: 'user-456',
    };

    mockRepository.save.mockImplementation(async (artifact: Artifact) => artifact);

    const result = await useCase.execute(dto);

    expect(result).toBeInstanceOf(Artifact);
    expect(result.title).toBe(dto.title);
    expect(mockRepository.save).toHaveBeenCalledTimes(1);
  });

  it('debe lanzar un error si el título está vacío', async () => {
    const dto = {
      title: '',
      description: 'Desc',
      category: 'Cat',
      communityId: 'comm-1',
      createdById: 'user-1',
    };

    await expect(useCase.execute(dto)).rejects.toThrow('El título es requerido');
  });

  it('debe lanzar un error si la descripción está vacía', async () => {
    const dto = {
      title: 'Título',
      description: ' ',
      category: 'Cat',
      communityId: 'comm-1',
      createdById: 'user-1',
    };

    await expect(useCase.execute(dto)).rejects.toThrow('La descripción es requerida');
  });
});
