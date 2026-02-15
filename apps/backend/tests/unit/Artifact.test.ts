import { Artifact, BlockchainStatus } from '../../src/domain/entities/Artifact';

describe('Artifact Entity', () => {
  describe('create', () => {
    it('debe crear un artefacto con propiedades válidas', () => {
      const artifact = Artifact.create({
        title: 'Huipil de Teotitlán',
        titleNative: 'Gueta de Teotitlán',
        description: 'Huipil tradicional tejido a mano',
        descriptionNative: 'Gueta tradicional',
        category: 'Textil',
        communityId: 'community-123',
        createdById: 'user-123',
        blockchainStatus: BlockchainStatus.PENDING,
        verified: false,
      });

      expect(artifact.title).toBe('Huipil de Teotitlán');
      expect(artifact.titleNative).toBe('Gueta de Teotitlán');
      expect(artifact.category).toBe('Textil');
      expect(artifact.verified).toBe(false);
      expect(artifact.blockchainStatus).toBe(BlockchainStatus.PENDING);
    });

    it('debe generar un ID único', () => {
      const artifact1 = Artifact.create({
        title: 'Artefacto 1',
        description: 'Descripción 1',
        category: 'Categoría 1',
        communityId: 'community-123',
        createdById: 'user-123',
        blockchainStatus: BlockchainStatus.PENDING,
        verified: false,
      });

      const artifact2 = Artifact.create({
        title: 'Artefacto 2',
        description: 'Descripción 2',
        category: 'Categoría 2',
        communityId: 'community-123',
        createdById: 'user-123',
        blockchainStatus: BlockchainStatus.PENDING,
        verified: false,
      });

      expect(artifact1.id).not.toBe(artifact2.id);
    });
  });

  describe('verify', () => {
    it('debe marcar el artefacto como verificado', () => {
      const artifact = Artifact.create({
        title: 'Test Artifact',
        description: 'Test Description',
        category: 'Test',
        communityId: 'community-123',
        createdById: 'user-123',
        blockchainStatus: BlockchainStatus.PENDING,
        verified: false,
      });

      expect(artifact.verified).toBe(false);

      artifact.verify();

      expect(artifact.verified).toBe(true);
    });
  });

  describe('updateBlockchainStatus', () => {
    it('debe actualizar el estado de blockchain', () => {
      const artifact = Artifact.create({
        title: 'Test Artifact',
        description: 'Test Description',
        category: 'Test',
        communityId: 'community-123',
        createdById: 'user-123',
        blockchainStatus: BlockchainStatus.PENDING,
        verified: false,
      });

      artifact.updateBlockchainStatus(BlockchainStatus.CONFIRMED, 'tx-hash-123');

      expect(artifact.blockchainStatus).toBe(BlockchainStatus.CONFIRMED);
      expect(artifact.blockchainTxHash).toBe('tx-hash-123');
    });
  });

  describe('isOnBlockchain', () => {
    it('debe retornar true si el artefacto está confirmado en blockchain', () => {
      const artifact = Artifact.create({
        title: 'Test Artifact',
        description: 'Test Description',
        category: 'Test',
        communityId: 'community-123',
        createdById: 'user-123',
        blockchainStatus: BlockchainStatus.CONFIRMED,
        verified: false,
      });

      expect(artifact.isOnBlockchain()).toBe(true);
    });

    it('debe retornar false si el artefacto no está confirmado', () => {
      const artifact = Artifact.create({
        title: 'Test Artifact',
        description: 'Test Description',
        category: 'Test',
        communityId: 'community-123',
        createdById: 'user-123',
        blockchainStatus: BlockchainStatus.PENDING,
        verified: false,
      });

      expect(artifact.isOnBlockchain()).toBe(false);
    });
  });
});
