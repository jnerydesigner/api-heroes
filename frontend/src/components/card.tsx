import { NavLink } from "react-router-dom";
import { HeroesProps } from "../api/fetch-heroes";
import { truncateLimitedWord } from "../utils/truncateLimitedWords";

interface CardProps {
  hero: HeroesProps;
}

export const Card: React.FC<CardProps> = ({ hero }) => {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col bg-yellow-light-comics p-4 shadow-lg rounded-xl circle-white relative">
      <div
        className="w-52 h-52 bg-top bg-cover rounded-xl"
        style={{ backgroundImage: `url(${hero.image})` }}
      ></div>
      <h2 className="text-4xl my-2">{hero.name}</h2>
      <p>
        {truncateLimitedWord(hero.about, 100)}
        <NavLink to={`/hero/${hero.id}`} className="text-red-comics">
          ... see more
        </NavLink>
        {/* <a href="http://localhost:3003/hero/1" className="text-red-comics">
          ... see more
        </a> */}
      </p>

      {hero.heroOrVilain === "hero" ? (
        <div className="absolute top-2 right-2 bg-green-comics text-white px-2 py-1 rounded-full">
          Hero
        </div>
      ) : (
        <span className="absolute top-2 right-2 bg-red-comics text-white px-2 py-1 rounded-full">
          Vilain
        </span>
      )}
    </div>
  );
};
