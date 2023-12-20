import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-10">
      <div className="flex flex-col gap-2">
        <h1>Join to Pixel Art Place</h1>
        <div className="border w-[350px] h-[300px] border-white"></div>
      </div>
      <RegisterForm />
    </div>
  );
}
