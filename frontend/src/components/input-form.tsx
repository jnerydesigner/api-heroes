interface InputFieldProps {
  label: string;
  name: string;
  register: any; // Tipo do register do react-hook-form
  errors: any; // Tipo dos erros retornados
  [x: string]: any; // Para aceitar quaisquer outras props via spread
}

export const InputForm: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  errors,
  ...rest
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        {...register(name)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        {...rest}
      />
      {errors[name] && (
        <p className="text-red-600 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};
