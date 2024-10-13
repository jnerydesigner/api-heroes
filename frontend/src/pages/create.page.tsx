import { CreateHeroForm } from "@/components/create-hero-form";

export function CreatePage() {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col circle bg-red-comics border-[2px] border-slate-950">
      <h1 data-shadow="Hero or Villain Creation Form" className="h1-title">
        Hero or Villain Creation Form
      </h1>
      <CreateHeroForm />
    </div>
  );
}
