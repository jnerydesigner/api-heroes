import { HeroesApi } from '@infra/data/heroes.data';
import { PrismaService } from '../client/prisma.service';

const prisma = new PrismaService();

const seedHero = async () => {
  await prisma.heroes.deleteMany();

  for (const hero of HeroesApi) {
    await prisma.heroes.create({
      data: {
        id: hero.id,
        name: hero.name,
        hero_or_vilain: hero.heroOrVilain,
        image: hero.image,
        about: hero.about,
      },
    });
  }
};

seedHero()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
