import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { Heroes } from '@prisma/client';

export class HeroMapper {
  static toPersistence(hero: HeroesPropsDto): Heroes {
    return {
      id: hero.id,
      name: hero.name,
      about: hero.about,
      image: hero.image,
      hero_or_vilain: hero.heroOrVilain,
      imagePath: hero.imagePath,
    };
  }

  static toResponse(hero: Heroes): HeroesPropsDto {
    return {
      id: hero.id,
      name: hero.name,
      about: hero.about,
      image: hero.image,
      heroOrVilain: hero.hero_or_vilain,
      imagePath: hero.imagePath,
    };
  }
}
