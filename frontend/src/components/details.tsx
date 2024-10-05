import { fetchHeroById } from "@/api/fetch-heroes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const Details: React.FC = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ["hero-detail", params.id],
    queryFn: () => fetchHeroById(params.id!),
    enabled: !!params.id,
  });
  return (
    <div className="w-[100%] bg-slate-200 circle grid grid-cols-2">
      <div className="w-full h-full flex justify-center items-center p-2">
        <div className="w-[500px] h-100 relative lex justify-center items-center">
          <img
            src={data?.image}
            alt="placeholder"
            className="img-detail relative"
          />
          {data?.heroOrVilain === "hero" ? (
            <h3 className="text-[2rem] absolute top-4 left-4 bg-yellow-light-comics circle text-red-comics py-2 px-4 rounded-2xl">
              {data?.heroOrVilain}
            </h3>
          ) : (
            <h3 className="text-[2rem] absolute top-4 left-4 text-yellow-light-comics circle bg-red-comics py-2 px-4 rounded-2xl">
              {data?.heroOrVilain}
            </h3>
          )}
        </div>
      </div>
      <div className="w-full h-full flex items-start justify-center flex-col bg-yellow-light-comics p-4 circle">
        <p className="text-[2rem]">
          Name: <span className="txt-shadow">{data?.name}</span>
        </p>
        <p className="text-[1.6rem]">About: {data?.about}</p>
      </div>
    </div>
  );
};
