import { FormLogin } from "@/components/form-login";

export function LoginPage() {
  return (
    <>
      <div className="w-full h-[70vh] flex justify-center items-center flex-row circle bg-red-comics border-[2px] border-slate-950">
        <div className="w-[50%] h-full flex justify-center items-center">
          <h3 className="w-full text-[5rem] text-yellow-light-comics flex justify-center items-center flex-col">
            <span>Heroes or Vilains</span>
            <span>Login</span>
          </h3>
        </div>

        <FormLogin />
      </div>
    </>
  );
}
