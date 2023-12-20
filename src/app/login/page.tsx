import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-10">
      <div className="flex flex-col gap-2">
        <h1>Pixel Art Place</h1>
        <div className="border w-[350px] h-[300px] border-white"></div>
      </div>
      <LoginForm />
    </div>
  );
}
