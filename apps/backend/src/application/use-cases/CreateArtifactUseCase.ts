import { Artifact, BlockchainStatus } from '../../domain/entities/Artifact';
import { IArtifactRepository } from '../../domain/repositories/IArtifactRepository';

/**
 * DTO para crear un artefacto
 */
export interface CreateArtifactDTO {
  title: string;
  titleNative?: string;
  description: string;
  descriptionNative?: string;
  category: string;
  imageUrl?: string;
  communityId: string;
  createdById: string;
}

/**
 * Caso de uso: Crear un nuevo artefacto cultural
 */
export class CreateArtifactUseCase {
  constructor(private artifactRepository: IArtifactRepository) {}

  async execute(dto: CreateArtifactDTO): Promise<Artifact> {
    // Validaciones de negocio
    if (!dto.title || dto.title.trim().length === 0) {
      throw new Error('El título es requerido');
    }

    if (!dto.description || dto.description.trim().length === 0) {
      throw new Error('La descripción es requerida');
    }

    if (!dto.category || dto.category.trim().length === 0) {
      throw new Error('La categoría es requerida');
    }

    // Crear entidad de dominio
    const artifact = Artifact.create({
      title: dto.title.trim(),
      titleNative: dto.titleNative?.trim(),
      description: dto.description.trim(),
      descriptionNative: dto.descriptionNative?.trim(),
      category: dto.category.trim(),
      imageUrl: dto.imageUrl,
      blockchainStatus: BlockchainStatus.PENDING,
      verified: false,
      communityId: dto.communityId,
      createdById: dto.createdById,
    });

    // Persistir
    const savedArtifact = await this.artifactRepository.save(artifact);

    // TODO: Emitir evento para registro en blockchain
    // await this.eventBus.publish(new ArtifactCreatedEvent(savedArtifact));

    return savedArtifact;
  }
}
