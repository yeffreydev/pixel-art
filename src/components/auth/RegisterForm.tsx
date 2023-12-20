import Link from "next/link";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-10 p-10">
      <div>
        <input className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="text" placeholder="username" />
      </div>
      <div>
        <input className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="text" placeholder="email" />
      </div>
      <div>
        <input className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="password" placeholder="password" />
      </div>
      <div className="flex items-center gap-2">
        <input className="" type="checkbox" placeholder="password" />

        <span>
          Accept our{" "}
          <a className="underline" href="#">
            Terms{" "}
          </a>{" "}
          and{" "}
          <a className="underline" href="#">
            services.
          </a>
        </span>
      </div>
      <div>
        <button className="border border-white rounded-xl w-[300px] px-5 py-1 hover:bg-gray-700" type="submit">
          Register
        </button>
      </div>
      <div>
        <span>
          {"if You have an Account. go to "}{" "}
          <Link className="text-cyan-300 font-semibold underline text-sm" href={"/login"}>
            Login
          </Link>
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
