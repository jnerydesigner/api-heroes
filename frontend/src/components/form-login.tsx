import { submitLogin } from "@/api/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
import { ButtonForm } from "./button";
import { InputForm } from "./input-form";
import { useNavigate } from "react-router-dom";
import { useToken } from "@/context/token.context";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(
      /[^a-zA-Z0-9]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
});

export type HeroLoginData = z.infer<typeof formSchema>;

export const FormLogin: React.FC = () => {
  const navigate = useNavigate();
  const { setTokenCtx } = useToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroLoginData>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: HeroLoginData) => submitLogin(data),
    onSuccess: (data: { access_token: string }) => {
      const token = data.access_token;
      if (token) {
        setTokenCtx(token);
        localStorage.setItem("tokenHeroesApi", token);
        toast.success("Login Successful", { position: "top-center" });
        navigate("/");
      }
    },
    onError: (error) => {
      toast.error(`Error saving hero: ${error.message}`, {
        position: "top-right",
      });
    },
  });

  const onSubmit = async (data: HeroLoginData) => {
    mutation.mutate(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[500px] max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
      >
        <InputForm
          label="Email"
          name="email"
          register={register}
          errors={errors}
        />
        <InputForm
          label="Password"
          name="password"
          register={register}
          errors={errors}
        />

        <ButtonForm name="Login" />
      </form>
      <ToastContainer autoClose={1000} className="custom-toast-container" />
    </>
  );
};
