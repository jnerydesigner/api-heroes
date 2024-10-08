import { CreateHeroForm } from "@/components/create-hero-form";

export function CreatePage() {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center circle bg-red-comics border-[8px] border-slate-950">
      <CreateHeroForm />
    </div>
  );
}
