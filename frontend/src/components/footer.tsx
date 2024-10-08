export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full h-[80px] flex justify-center items-center circle bg-red-comics border-[8px] border-slate-950 mb-2">
        <h2>
          <span className="txt-shadow">
            Site criado por {import.meta.env.VITE_AUTHOR_SITE}
          </span>
        </h2>
      </div>
    </>
  );
};
