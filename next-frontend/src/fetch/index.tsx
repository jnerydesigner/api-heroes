export const GetHeroes = async <T,>(): Promise<T> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_HERO}/heroes?page=1&limit=12`;
  const response = await fetch(apiUrl, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Not Valid api");
  }

  const data: T = await response.json();

  return data;
};
