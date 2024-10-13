import { useQuery } from "@tanstack/react-query";
import { Card } from "./card";
import { fetchHeroes } from "../api/fetch-heroes";
import { Pagination } from "./pagination";
import { usePage } from "@/context/page.context";

export const Content: React.FC = () => {
  const { pageCurrent } = usePage();

  const { data, isLoading } = useQuery({
    queryKey: ["heroes", pageCurrent],
    queryFn: () => fetchHeroes(pageCurrent),
  });

  return (
    <>
      {isLoading && (
        <div className="w-full h-[100vh] flex justify-center items-center circle bg-red-comics border-[2px] border-slate-950">
          <h1 className="text-[5rem] text-yellow-light-comics">
            Loading Heroes...
          </h1>
        </div>
      )}
      <div className="w-full circle bg-red-comics border-[2px] border-slate-950 grid grid-cols-5 gap-4 p-4">
        <Pagination
          currentPage={data?.currentPage ?? 1}
          totalPages={data?.totalPages ?? 10}
        />
      </div>
      <div className="w-full circle bg-red-comics border-[2px] border-slate-950 grid grid-cols-5 gap-4 p-4">
        {data?.heroes.map((hero) => (
          <Card key={hero.id} hero={hero} />
        ))}
      </div>

      <div className="w-full circle bg-red-comics border-[2px] border-slate-950 grid grid-cols-5 gap-4 p-4">
        <Pagination
          currentPage={data?.currentPage ?? 1}
          totalPages={data?.totalPages ?? 10}
        />
      </div>
    </>
  );
};
