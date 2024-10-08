import { fetchHeroes } from "@/api/fetch-heroes";
import { Card } from "@/components/card";
import { Pagination } from "@/components/pagination";

import { usePage } from "@/context/page.context";
import { useQuery } from "@tanstack/react-query";

export function HomePage() {
  const { pageCurrent } = usePage();

  const { data, isLoading } = useQuery({
    queryKey: ["heroes", pageCurrent],
    queryFn: () => fetchHeroes(pageCurrent),
  });
  return (
    <>
      {isLoading && (
        <div className="w-full h-[100vh] flex justify-center items-center circle bg-red-comics border-[8px] border-slate-950">
          <h1 className="text-[5rem] text-yellow-light-comics">
            Loading Heroes...
          </h1>
        </div>
      )}
      <div className="w-full h-auto circle bg-red-comics border-[8px] border-slate-950 grid grid-cols-1 gap-4 p-4">
        <Pagination
          currentPage={data?.currentPage ?? 1}
          totalPages={data?.totalPages ?? 10}
        />
      </div>
      <div className="w-full circle bg-red-comics border-[8px] border-slate-950 grid grid-cols-5 gap-4 p-4">
        {data?.heroes.map((hero) => (
          <Card key={hero.id} hero={hero} />
        ))}
      </div>

      <div className="w-full h-auto circle bg-red-comics border-[8px] border-slate-950 grid grid-cols-1 gap-4 p-4q">
        <Pagination
          currentPage={data?.currentPage ?? 1}
          totalPages={data?.totalPages ?? 10}
        />
      </div>
    </>
  );
}
