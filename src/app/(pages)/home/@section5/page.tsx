"use client";

import { addEmail, FormState } from "@/actions/emails";
import Form from "next/form";
import { useActionState, useState } from "react";

const Section5 = () => {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction] = useActionState(addEmail, initialState);
  const [email, setEmail] = useState("");

  return (
    <section className={`flex items-center lg:h-screen lg:m-0`}>
      <div
        className={`card sm:py-32 py-24 px-8 w-full h-[50%] flex flex-col lg:flex-row items-center justify-around lg:justify-between gap-16`}
      >
        <div className={``}>
          <h2 className={`text-white lg:text-[min(3.75vw,48px)] subhead`}>
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
              type="text"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`placeholder:text-secondary placeholder:text-lg placeholder:opacity-70 rounded-lg border border-borderColor p-6 w-full bg-white/3 outline-none text-white text-lg font-bold`}
            />
            <button
              className={`absolute top-[15%] right-2.5 h-[70%] btn-con py-0 sm:block hidden`}
            >
              GET STARTED
            </button>
            <button className={`btn-con sm:hidden w-full py-4 mt-4`}>
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
