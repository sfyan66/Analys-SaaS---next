"use client"
import { addEmail, FormState } from "@/actions/emails";
import Form from "next/form";
import { useActionState } from "react";

const Section5 = () => {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction] = useActionState(addEmail, initialState);
  const handleInValid = (e: React.InputEvent<HTMLInputElement>) => {
    e.preventDefault();
  }
  return (
    <section className={`h-screen flex items-center`}>
      <div className={`card py-12 px-16 w-full h-[50%] flex items-center`}>
        <div className={`w-[50%]`}>
          <h2
          className={`text-white md:text-[min(3vw,36px)] mb-12 font-bold leading-tight`}
          >Ready to get started?<br/>Create an account today</h2>
          <Form
            action={formAction}>
            <div
              className="relative">
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email address"
                onInvalid={handleInValid}
                className={`placeholder:text-secondary placeholder:text-lg rounded-lg border border-white/5 p-6 w-full bg-gray-600/4 outline-none text-white text-lg`}
              />
              <button
                className={`absolute top-[15%] right-2.5 h-[70%] btn-con py-0`}>
                GET STARTED
              </button>
            </div>
            {state.errors.email && (
              <p 
              className={`text-center text-red-900 mt-4`}
              >{state.errors.email}</p>
            )}
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Section5