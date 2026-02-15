import { Artifact } from '../entities/Artifact';

/**
 * Artifact Repository Interface
 * Define el contrato para persistencia de artefactos
 */
export interface IArtifactRepository {
  /**
   * Guarda un nuevo artefacto
   */
  save(artifact: Artifact): Promise<Artifact>;

  /**
   * Encuentra un artefacto por ID
   */
  findById(id: string): Promise<Artifact | null>;

  /**
   * Encuentra todos los artefactos de una comunidad
   */
  findByCommunityId(communityId: string): Promise<Artifact[]>;

  /**
   * Encuentra todos los artefactos
   */
  findAll(): Promise<Artifact[]>;

  /**
   * Actualiza un artefacto existente
   */
  update(artifact: Artifact): Promise<Artifact>;

  /**
   * Elimina un artefacto
   */
  delete(id: string): Promise<void>;

  /**
   * Cuenta artefactos por comunidad
   */
  countByCommunity(communityId: string): Promise<number>;

  /**
   * Cuenta artefactos verificados
   */
  countVerified(): Promise<number>;
}
