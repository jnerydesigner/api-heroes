import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import { submitHero } from "@/api/fetch-heroes";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z.string().min(10, "Must be a valid URL"),
  heroOrVilain: z.string().min(4, "Hero or Vilain is required"),
  about: z.string().min(10, "About must be at least 10 characters"),
});

export type HeroFormData = z.infer<typeof formSchema>;

export const CreateHeroForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HeroFormData>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: HeroFormData) => submitHero(data),
    onSuccess: () => {
      navigate("/");
      reset();
      toast.success("Hero saved successfully!", { position: "top-right" });
    },
    onError: (error) => {
      toast.error(`Error saving hero: ${error.message}`, {
        position: "top-right",
      });
    },
  });

  const onSubmit = (data: HeroFormData) => {
    mutation.mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[500px] max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            {...register("image")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.image && (
            <p className="text-red-600 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hero or Villain
          </label>
          <select
            {...register("heroOrVilain")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select...</option>
            <option value="hero">Hero</option>
            <option value="vilain">Villain</option>
          </select>
          {errors.heroOrVilain && (
            <p className="text-red-600 text-sm mt-1">
              {errors.heroOrVilain.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            About
          </label>
          <textarea
            {...register("about")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows={5}
          />
          {errors.about && (
            <p className="text-red-600 text-sm mt-1">{errors.about.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};
