"use client";

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
  };
  return (
    <section className={`flex items-center`}>
      <div
        className={`card py-32 px-16 w-full h-[50%] flex flex-col lg:flex-row items-center justify-around lg:justify-between gap-16`}
      >
        <div className={``}>
          <h2
            className={`text-white lg:text-[min(3vw,36px)] text-[min(5vw,36px)] font-bold leading-tight`}
          >
            Ready to get started?
            <br />
            Create an account today
          </h2>
        </div>
        <Form
          action={formAction}
          className="flex-1 lg:max-w-1/2 w-full max-w-[400px] sm:max-w-[550px]"
        >
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              onInvalid={handleInValid}
              className={`placeholder:text-secondary placeholder:text-lg rounded-lg border border-white/5 p-6 w-full bg-gray-600/4 outline-none text-white text-lg`}
            />
            <button
              className={`absolute top-[15%] right-2.5 h-[70%] btn-con py-0 sm:block hidden`}
            >
              GET STARTED
            </button>
            <button className={`btn-con sm:hidden ml-auto py-4 mt-4`}>
              GET STARTED
            </button>
          </div>
          {state.errors.email && (
            <p className={`text-center text-red-900 mt-4`}>
              {state.errors.email}
            </p>
          )}
        </Form>
      </div>
    </section>
  );
};

export default Section5;
