/**
 * Artifact Domain Entity
 * Representa un artefacto cultural registrado en la plataforma
 */

export enum BlockchainStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  CONFIRMED = 'CONFIRMED',
  FAILED = 'FAILED',
}

export interface ArtifactProps {
  id: string;
  title: string;
  titleNative?: string;
  description: string;
  descriptionNative?: string;
  category: string;
  imageUrl?: string;
  imageHash?: string;
  blockchainTxHash?: string;
  blockchainStatus: BlockchainStatus;
  verified: boolean;
  communityId: string;
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Artifact {
  private constructor(private props: ArtifactProps) {}

  public static create(props: Omit<ArtifactProps, 'id' | 'createdAt' | 'updatedAt'>): Artifact {
    return new Artifact({
      ...props,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  public static fromPersistence(props: ArtifactProps): Artifact {
    return new Artifact(props);
  }

  // Getters
  get id(): string {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }

  get titleNative(): string | undefined {
    return this.props.titleNative;
  }

  get description(): string {
    return this.props.description;
  }

  get descriptionNative(): string | undefined {
    return this.props.descriptionNative;
  }

  get category(): string {
    return this.props.category;
  }

  get imageUrl(): string | undefined {
    return this.props.imageUrl;
  }

  get imageHash(): string | undefined {
    return this.props.imageHash;
  }

  get blockchainTxHash(): string | undefined {
    return this.props.blockchainTxHash;
  }

  get blockchainStatus(): BlockchainStatus {
    return this.props.blockchainStatus;
  }

  get verified(): boolean {
    return this.props.verified;
  }

  get communityId(): string {
    return this.props.communityId;
  }

  get createdById(): string {
    return this.props.createdById;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  // Business logic methods
  public verify(): void {
    this.props.verified = true;
    this.props.updatedAt = new Date();
  }

  public updateBlockchainStatus(status: BlockchainStatus, txHash?: string): void {
    this.props.blockchainStatus = status;
    if (txHash) {
      this.props.blockchainTxHash = txHash;
    }
    this.props.updatedAt = new Date();
  }

  public isOnBlockchain(): boolean {
    return this.props.blockchainStatus === BlockchainStatus.CONFIRMED;
  }

  public toJSON(): ArtifactProps {
    return { ...this.props };
  }
}
