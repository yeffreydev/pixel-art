import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-10 p-10">
      <div>
        <input className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="text" placeholder="username" />
      </div>
      <div>
        <input className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="password" placeholder="password" />
      </div>
      <div>
        <button className="border border-white rounded-xl w-[300px] px-5 py-1 hover:bg-gray-700" type="submit">
          Login
        </button>
      </div>
      <div>
        <span>
          {"if You don't have an account "}{" "}
          <Link className="text-cyan-300 font-semibold underline text-sm" href={"/register"}>
            Register
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
