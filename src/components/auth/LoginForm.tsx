"use client";
import { apiLoginUser } from "@/api/auth";
import Link from "next/link";
import { FormEvent, useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const loginUser = async () => {
    const data = await apiLoginUser(form);
    if (!data) {
      alert("usuario o contraseña incorrecta");
    }
    //saved auth in localstorage
    if (window) {
      window.localStorage.setItem("auth", JSON.stringify(data));
    }
    console.log(data);
    //add auth to auth provider
  };
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 p-10">
      <div>
        <input onChange={handleChange} value={form.username} name="username" className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="text" placeholder="email or username" />
      </div>
      <div>
        <input onChange={handleChange} value={form.password} name="password" className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="password" placeholder="password" />
      </div>
      <div>
        <button className="border border-white rounded-xl w-[300px] px-5 py-1 hover:bg-gray-700" type="submit">
          Login
        </button>
      </div>
      <div>
        <span>
          {"if You don't have an account. Go to "}{" "}
          <Link className="text-cyan-300 font-semibold underline text-sm" href={"/register"}>
            Register
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
