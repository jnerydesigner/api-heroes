import { Content } from "@/components/content";
import { Header } from "@/components/header";

export function HomePage() {
  return (
    <>
      <div className="container mx-auto">
        <Header />

        <Content />
      </div>
    </>
  );
}
