import { Hero } from "@/types/hero.type";
import Image from "next/image";

type CardProps = {
  hero: Hero;
};

export const CardHero = ({ hero }: CardProps) => {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col bg-yellow-light-comics p-4 shadow rounded-xl circle-white relative">
      <h2 className="text-4xl my-2 text-black">{hero.name}</h2>
      <div className="w-full h-50">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_HERO}/heroes/static/${hero.imagePath}`}
          width={500}
          height={500}
          alt={hero.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
