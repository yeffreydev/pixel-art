"use client";
import { apiRegisterUser } from "@/api/auth";
import Link from "next/link";
import { FormEvent, useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    terms: true,
  });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.currentTarget;
    if (name === "terms") return setForm((prev) => ({ ...form, [name]: checked }));
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const registerUser = async () => {
    try {
      const data = await apiRegisterUser(form);
      if (!data) return alert("email or username is duplicated");
      //save token on localstorage
      if (window) {
        window.localStorage.setItem("auth", JSON.stringify(data));
      }
      //add token to auth provider
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.terms) return alert("aceptar los terminos y condiciones");
    registerUser();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10">
      <div>
        <input onChange={handleChange} value={form.username} name="username" className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="text" placeholder="username" />
      </div>
      <div>
        <input onChange={handleChange} value={form.email} name="email" className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="text" placeholder="email" />
      </div>
      <div>
        <input onChange={handleChange} value={form.password} name="password" className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2" type="password" placeholder="password" />
      </div>
      <div>
        <input
          onChange={handleChange}
          value={form.confirmPassword}
          name="confirmPassword"
          className="bg-opacity-0 bg-black border-b w-[300px] border-gray-400 py-2"
          type="password"
          placeholder="confirm password"
        />
      </div>
      <div className="flex items-center gap-2">
        <input onChange={handleChange} checked={form.terms} name="terms" className="" type="checkbox" />

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
