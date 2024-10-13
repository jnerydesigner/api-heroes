import { HeroFormData } from "@/components/create-hero-form";
import { Api } from ".";

export interface HeroesProps {
  id: string;
  name: string;
  image: string;
  heroOrVilain: "hero" | "vilain";
  about: string;
}
export interface FetchHeroesProps {
  heroes: HeroesProps[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  total: number;
}

export const fetchHeroes = async (page: number = 1) => {
  const { data } = await Api.get<FetchHeroesProps>(
    `/heroes?page=${page}&limit=10`
  );
  return data;
};

export const fetchHeroById = async (id: string) => {
  const { data } = await Api.get<HeroesProps>(`/heroes/details/${id}`);
  return data;
}

// export const submitHero = async (data: HeroFormData) => {
//   const response = await Api.post('/heroes', data, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("tokenHeroesApi")}`,
//     }
//   });
//   return response.data;
// };

export const submitHero = async (data: HeroFormData) => {
  const response = await Api.post('/heroes', data);

  return response.data;
};


