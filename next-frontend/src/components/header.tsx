import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full h-30 flex justify-center items-center circle bg-red-comics">
      <Link href="#">
        <h3 className="text-[5.1rem] relative text-black">Hero or Villains</h3>
        <h3 className="text-[5rem] absolute top-1 text-yellow-light-comics">
          Hero or Villains
        </h3>
      </Link>
    </div>
  );
};
