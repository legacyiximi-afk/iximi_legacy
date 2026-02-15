import { PrismaClient } from '@prisma/client';

import { Artifact, BlockchainStatus } from '../../domain/entities/Artifact';
import { IArtifactRepository } from '../../domain/repositories/IArtifactRepository';

/**
 * Implementación de IArtifactRepository usando Prisma
 */
export class PrismaArtifactRepository implements IArtifactRepository {
  constructor(private prisma: PrismaClient) {}

  async save(artifact: Artifact): Promise<Artifact> {
    const data = artifact.toJSON();
    const created = await this.prisma.artifact.create({
      data: {
        id: data.id,
        title: data.title,
        titleNative: data.titleNative,
        description: data.description,
        descriptionNative: data.descriptionNative,
        category: data.category,
        imageUrl: data.imageUrl,
        imageHash: data.imageHash,
        blockchainTxHash: data.blockchainTxHash,
        blockchainStatus: data.blockchainStatus,
        verified: data.verified,
        communityId: data.communityId,
        createdById: data.createdById,
      },
    });

    return this.toDomain(created);
  }

  async findById(id: string): Promise<Artifact | null> {
    const artifact = await this.prisma.artifact.findUnique({
      where: { id },
    });

    return artifact ? this.toDomain(artifact) : null;
  }

  async findByCommunityId(communityId: string): Promise<Artifact[]> {
    const artifacts = await this.prisma.artifact.findMany({
      where: { communityId },
      orderBy: { createdAt: 'desc' },
    });

    return artifacts.map((a) => this.toDomain(a));
  }

  async findAll(): Promise<Artifact[]> {
    const artifacts = await this.prisma.artifact.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return artifacts.map((a) => this.toDomain(a));
  }

  async update(artifact: Artifact): Promise<Artifact> {
    const data = artifact.toJSON();
    const updated = await this.prisma.artifact.update({
      where: { id: data.id },
      data: {
        title: data.title,
        titleNative: data.titleNative,
        description: data.description,
        descriptionNative: data.descriptionNative,
        category: data.category,
        imageUrl: data.imageUrl,
        imageHash: data.imageHash,
        blockchainTxHash: data.blockchainTxHash,
        blockchainStatus: data.blockchainStatus,
        verified: data.verified,
        updatedAt: data.updatedAt,
      },
    });

    return this.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.artifact.delete({
      where: { id },
    });
  }

  async countByCommunity(communityId: string): Promise<number> {
    return await this.prisma.artifact.count({
      where: { communityId },
    });
  }

  async countVerified(): Promise<number> {
    return await this.prisma.artifact.count({
      where: { verified: true },
    });
  }

  private toDomain(raw: {
    id: string;
    title: string;
    titleNative: string | null;
    description: string;
    descriptionNative: string | null;
    category: string;
    imageUrl: string | null;
    imageHash: string | null;
    blockchainTxHash: string | null;
    blockchainStatus: string;
    verified: boolean;
    communityId: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
  }): Artifact {
    return Artifact.fromPersistence({
      id: raw.id,
      title: raw.title,
      titleNative: raw.titleNative ?? undefined,
      description: raw.description,
      descriptionNative: raw.descriptionNative ?? undefined,
      category: raw.category,
      imageUrl: raw.imageUrl ?? undefined,
      imageHash: raw.imageHash ?? undefined,
      blockchainTxHash: raw.blockchainTxHash ?? undefined,
      blockchainStatus: raw.blockchainStatus as BlockchainStatus,
      verified: raw.verified,
      communityId: raw.communityId,
      createdById: raw.createdById,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }
}
