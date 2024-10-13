import { HeroLoginData } from "@/components/form-login";
import { Api } from ".";

export const submitLogin = async (data: HeroLoginData) => {
    const response = await Api.post('/auth/login', data);
    return response.data;
};

export const fecthUser = async <T>(token: string): Promise<T> => {
    const response = await Api.get<T>('/auth/profile', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}