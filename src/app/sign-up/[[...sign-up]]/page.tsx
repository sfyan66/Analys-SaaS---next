import { SignUp } from "@clerk/nextjs";

export default function signUpPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
}
