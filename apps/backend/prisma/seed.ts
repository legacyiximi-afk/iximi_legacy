import { PrismaClient, Role, BlockchainStatus } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seeding...');

  // 1. Crear Usuarios
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@iximi.com' },
    update: {},
    create: {
      email: 'admin@iximi.com',
      name: 'Administrador IXIMI',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });

  const estefania = await prisma.user.upsert({
    where: { email: 'legacyiximi@gmail.com' },
    update: {},
    create: {
      email: 'legacyiximi@gmail.com',
      name: 'Estefanía Pérez Vázquez',
      password: hashedPassword,
      role: Role.COMMUNITY_MANAGER,
    },
  });

  console.log('✅ Usuarios creados');

  // 2. Crear Comunidades
  const communities = [
    {
      name: 'Teotitlán del Valle',
      nameNative: 'Xaguie',
      language: 'Zapoteco',
      region: 'Valles Centrales',
      description: 'Famosa por sus tapetes de lana tejidos en telares de pedal y teñidos con tintes naturales.',
    },
    {
      name: 'San Bartolo Coyotepec',
      nameNative: 'Zaachila',
      language: 'Zapoteco',
      region: 'Valles Centrales',
      description: 'Cuna del barro negro, técnica ancestral de alfarería.',
    },
    {
      name: 'Santo Tomás Jalieza',
      nameNative: 'Jalieza',
      language: 'Zapoteco',
      region: 'Valles Centrales',
      description: 'Conocida como la "Ciudad de los Cinturones" por sus tejidos en telar de cintura.',
    },
  ];

  const createdCommunities = [];
  for (const comm of communities) {
    const created = await prisma.community.create({
      data: comm,
    });
    createdCommunities.push(created);
  }

  console.log('✅ Comunidades creadas');

  // 3. Crear Artefactos
  const artifacts = [
    {
      title: 'Tapete de Lana con Grana Cochinilla',
      titleNative: 'Gueta de lana',
      description: 'Tapete tejido a mano con lana de borrego y teñido con grana cochinilla natural.',
      category: 'Textil',
      communityId: createdCommunities[0].id,
      createdById: estefania.id,
      blockchainStatus: BlockchainStatus.CONFIRMED,
      verified: true,
    },
    {
      title: 'Cántaro de Barro Negro',
      titleNative: 'Cántaro de barro',
      description: 'Cántaro tradicional de San Bartolo Coyotepec con acabado brillante.',
      category: 'Alfarería',
      communityId: createdCommunities[1].id,
      createdById: estefania.id,
      blockchainStatus: BlockchainStatus.PENDING,
      verified: true,
    },
  ];

  for (const art of artifacts) {
    await prisma.artifact.create({
      data: art,
    });
  }

  console.log('✅ Artefactos creados');
  console.log('✨ Seeding completado con éxito');
}

main()
  .catch((e) => {
    console.error('❌ Error en seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
