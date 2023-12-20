import LoginForm from "@/components/auth/LoginForm";

export default function RegisterPage() {
  return (
    <div className="flex">
      <div>
        <h1>Pixel Art Place</h1>
        <div className="border border-white"></div>
      </div>
      <LoginForm />
    </div>
  );
}
