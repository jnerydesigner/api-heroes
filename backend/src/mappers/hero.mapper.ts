import crypto from 'crypto';

export interface HeroesPropsDomain {
  id?: string | undefined;
  name: string;
  image: string;
  heroOrVilain: "hero" | "vilain";
  about: string;
}

export interface HeroesPropsPersistence {
  id?: string | undefined;
  name: string;
  image: string;
  hero_or_vilain: string;
  about: string;
}

export class HeroesToDomain {
  id?: string;
  name: string;
  image: string;
  heroOrVilain: string;
  about: string;

  constructor({
    name,
    about,
    hero_or_vilain,
    image,
    id,
  }: HeroesPropsPersistence) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.heroOrVilain = hero_or_vilain;
    this.about = about;
  }

  static createHero({
    name,
    about,
    hero_or_vilain,
    image,
  }: HeroesPropsPersistence) {
    const id = crypto.randomUUID();
    return new HeroesToDomain({ name, about, hero_or_vilain, image, id });
  }

  static heroesRestore(id: string, about: string, hero_or_vilain: string, image: string, name: string) {
    return new HeroesToDomain({ name, about, hero_or_vilain, image, id });
  }
}

export class HeroesPersistence {
  id?: string;
  name: string;
  image: string;
  hero_or_vilain: string;
  about: string;

  constructor({ name, about, heroOrVilain, image, id }: HeroesToDomain) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.hero_or_vilain = heroOrVilain;
    this.about = about;
  }

  static createHero({ name, about, heroOrVilain, image }: HeroesToDomain) {
    const id = crypto.randomUUID();
    return new HeroesPersistence({ name, about, heroOrVilain, image, id });
  }
}
