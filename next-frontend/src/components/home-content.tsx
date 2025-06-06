"use client";

import { GetHeroes } from "@/fetch";
import { HeroesFull } from "@/types/hero.type";
import { useState, useEffect } from "react";
import { CardHero } from "./card";

export const HomeContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [heroes, setHeroes] = useState<HeroesFull | null>(null);

  useEffect(() => {
    const fetchHeroesData = async () => {
      try {
        const data = await GetHeroes<HeroesFull>();
        setHeroes(data);
      } catch {
        setError("Failed to load fetch Heroes");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroesData();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="w-full h-auto grid grid-cols-4 gap-8 bg-yellow-dark-comics p-4">
      {heroes &&
        heroes.heroes.map((hero) => <CardHero key={hero.id} hero={hero} />)}
    </section>
  );
};
