import { Details } from "@/components/details";
import { Header } from "@/components/header";

export function DetailsPage() {
  return (
    <>
      <div className="container mx-auto bg-slate-900">
        <Header />
        <div className="w-full circle bg-red-comics border-[8px] border-slate-950  flex justify-center items-center gap-4 p-4">
          <Details />
        </div>
      </div>
    </>
  );
}
