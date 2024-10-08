import { HeroLoginData } from "@/components/form-login";
import { Api } from ".";

export const submitLogin = async (data: HeroLoginData) => {
    const response = await Api.post('/heroes', data);
    return response.data;
};