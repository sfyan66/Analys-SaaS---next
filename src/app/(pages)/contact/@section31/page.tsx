"use client";

import { useActionState, useState } from "react";
import { FormState, createMessage } from "@/actions/emails";
import Form from "next/form";
import Image from "next/image";

export default function Section31() {
  const initialState: FormState = {
    errors: {},
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [state, formAction, isPending] = useActionState(
    createMessage,
    initialState
  );
  return (
    <section
      className={`lg:h-screen lg:my-auto mt-40 flex flex-col lg:flex-row items-center xl:gap-20 gap-8`}
    >
      <div className="flex-1">
        <div>
          <h1 className={`text-white head1 text-[3.5rem] md:head1`}>
            Contact us!
          </h1>
          <p
            className={`text-pp text-[16px] text-secondary mb-8 max-w-[600px]`}
          >
            Have questions or need assistance? Fill out the form below, and our
            dedicated team will get back to you promptly.
          </p>
        </div>
        <Form
          action={formAction}
          className="py-4 space-y-4 md:grid grid-cols-2 gap-x-8 gap-y-4 w-full md:max-w-full max-w-[500px]"
        >
          <div>
            <label className="text-white font-light tracking-tight">
              Name
              <input
                type="text"
                className="form-input"
                name="name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </label>
            {state.errors.name && (
              <p className="form-error">{state.errors.name}</p>
            )}
          </div>
          <div>
            <label className="text-white font-light tracking-tight">
              Email
              <input
                type="text"
                className="form-input"
                name="email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </label>
            {state.errors.email && (
              <p className="form-error">{state.errors.email}</p>
            )}
          </div>
          <div>
            <label className="text-white font-light tracking-tight">
              Phone
              <input
                className="form-input"
                name="phone"
                value={values.phone}
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
              />
            </label>
            {state.errors.phone && (
              <p className="form-error">{state.errors.phone}</p>
            )}
          </div>
          <div>
            <label className="text-white font-light tracking-tight">
              Company
              <input
                className="form-input"
                name="company"
                value={values.company}
                onChange={(e) =>
                  setValues({ ...values, company: e.target.value })
                }
              />
            </label>
            {state.errors.company && (
              <p className="form-error">{state.errors.company}</p>
            )}
          </div>
          <div className="col-span-2">
            <label className="text-white">
              Message
              <textarea
                className="form-input"
                name="message"
                placeholder="Type Your Message Here..."
                value={values.message}
                onChange={(e) =>
                  setValues({ ...values, message: e.target.value })
                }
              />
            </label>
            {state.errors.message && (
              <p className="form-error">{state.errors.message}</p>
            )}
          </div>
          <button type="submit" className="btn-con" disabled={isPending}>
            SEND MESSAGE
          </button>
        </Form>
      </div>
      <div>
        <div className="card w-full h-full text-secondary sm:px-12 px-8 py-12 max-w-[500px] mx-auto">
          <h1 className="text-white text-4xl font-semibold">Contact details</h1>
          <p className="mt-3 mb-12 text-pp text-[16px] ">
            Reach out directly via email or phone using the information provided
            for quick assistance.
          </p>
          <div className="flex gap-6 mb-9">
            <Image
              src={"/email.svg"}
              alt=""
              width={22}
              height={22}
              className="max-w-[22px] max-h-[22px] mt-1 opacity-80"
            />
            <div>
              <h3 className="text-xl text-white font-semibold">Email</h3>
              <p className="font-semibold">contact@analyzer.com</p>
            </div>
          </div>
          <div className="flex gap-6 mb-8">
            <Image
              src={"/phone.svg"}
              alt=""
              width={22}
              height={22}
              className="max-w-[22px] max-h-[22px] mt-1 opacity-80"
            />
            <div>
              <h3 className="text-xl text-white font-semibold">Phone</h3>
              <p className="font-semibold">(732) 454-6985</p>
            </div>
          </div>
          <ul className="text-lg text-white">
            Follow us:
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
