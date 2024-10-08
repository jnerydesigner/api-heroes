export interface ButtonFormProps {
  name: string;
}
export const ButtonForm: React.FC<ButtonFormProps> = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
    >
      {name}
    </button>
  );
};
