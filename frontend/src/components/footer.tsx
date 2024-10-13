export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center circle bg-red-comics border-[2px] border-slate-950 ">
        <h2>
          <span className="txt-shadow">
            Site criado por {import.meta.env.VITE_AUTHOR_SITE}
          </span>
        </h2>
      </div>
    </>
  );
};
