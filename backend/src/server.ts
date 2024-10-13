import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import { prisma } from "./service/prisma.service";
import { HeroesPersistence, HeroesToDomain } from "./mappers/hero.mapper";
import { HeroesApi } from "./data/heroes.data";

export interface HeroesProps {
  id: string;
  name: string;
  image: string;
  heroOrVilain: "hero" | "vilain";
  about: string;
}

const app = express();
app.use(express.json());
app.use(cors());
const PORT = Number(process.env.PORT_SERVER);

const prismaService = prisma;

app.get("/", async (request: Request, res: Response) => {
  const { currentPage, pageSize } = request.query;
  if (!currentPage || !pageSize) {
    const current = 1;
    const size = 10
    const totalItems = await prismaService.heroes.count();
    const totalPages = Math.ceil(totalItems / Number(pageSize));
    const heroes = await prismaService.heroes.findMany({
      skip: (Number(current) - 1) * Number(size),
      take: Number(size),
      orderBy: {
        name: "asc",
      },
    });


    const heroesMap = heroes.map((hero: any) => {
      return new HeroesToDomain(hero);
    });

    res.json({
      heroes: heroesMap,
      currentPage: Number(currentPage),
      pageSize: Number(pageSize),
      totalPages,
      total: heroes.length,
    });
  }

  const totalItems = await prismaService.heroes.count();
  const totalPages = Math.ceil(totalItems / Number(pageSize));


  const heroes = await prismaService.heroes.findMany({
    skip: (Number(currentPage) - 1) * Number(pageSize),
    take: Number(pageSize),
    orderBy: {
      name: "asc",
    },
  });

  const heroesMap = heroes.map((hero: any) => {
    return new HeroesToDomain(hero);
  });

  res.json({
    heroes: heroesMap,
    currentPage: Number(currentPage),
    pageSize: Number(pageSize),
    totalPages,
    total: heroes.length,
  });
});

app.post("/", async (req: Request, res: Response) => {
  const { name, image, heroOrVilain, about } = req.body;
  const heroPersistence = HeroesPersistence.createHero({
    name,
    image,
    heroOrVilain,
    about,
  });
  const hero = await prismaService.heroes.create({
    data: heroPersistence,
  });

  res.json(hero);
});

app.delete("/deleteall", async (req: Request, res: Response) => {
  await prismaService.heroes.deleteMany();
  res.json({
    message: "All heroes was deleted",
  });
});

app.get("/details/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const hero = await prismaService.heroes.findUnique({
    where: {
      id: String(id),
    },
  });

  if (!hero) {
    return res.status(404).json({
      message: "Hero not found",
    });
  }

  res.json(new HeroesToDomain(hero));
});

app.patch("/update/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, image, heroOrVilain, about } = req.body;
  const hero = await prismaService.heroes.findUnique({
    where: {
      id: String(id),
    },
  });

  if (!hero) {
    return res.status(404).json({
      message: "Hero not found",
    });
  }


  const updateHeroProps = {
    id: hero.id,
    name: name === undefined ? hero.name : name,
    image: image === undefined ? hero.image : image,
    heroOrVilain: heroOrVilain === undefined ? hero.hero_or_vilain : heroOrVilain,
    about: about === undefined ? hero.about : about,
  }




  await prismaService.heroes.update({
    where: {
      id: String(id),
    },
    data: {
      name: updateHeroProps.name,
      image: updateHeroProps.image,
      hero_or_vilain: updateHeroProps.heroOrVilain,
      about: updateHeroProps.about,
    },
  })


  const heroUpdated = await prismaService.heroes.findUnique({
    where: {
      id: String(id),
    },
  });

  if (!heroUpdated) {
    return res.status(404).json({
      message: "Hero not found",
    });
  }


  res.json(HeroesToDomain.heroesRestore(heroUpdated.id, heroUpdated.about, heroUpdated.hero_or_vilain, heroUpdated.image, heroUpdated.name));
});

app.get("/seeder-execute", async (req: Request, res: Response) => {

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

  res.json({
    message: "Seeder executed",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
