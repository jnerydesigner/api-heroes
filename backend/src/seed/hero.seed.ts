import { HeroesApi } from "../data/heroes.data";
import { prisma } from "../service/prisma.service";

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
