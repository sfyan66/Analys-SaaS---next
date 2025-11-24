import { SignIn } from '@clerk/nextjs';

export default function signInPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: '',
          },
        }}
      />
    </div>
  );
}
