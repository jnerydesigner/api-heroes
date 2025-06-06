export interface HeroesFull {
  heroes: Hero[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  total: number;
}

export interface Hero {
  id: string;
  name: string;
  about: string;
  image: string;
  heroOrVilain: string;
  imagePath: string;
}
