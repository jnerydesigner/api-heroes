import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPrivateData = async (token: string) => {
  try {
    const response = await Api.get('/private', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao acessar rota privada:', error);
    throw error;
  }
};
