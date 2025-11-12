"use client"

import { useActionState } from "react";
import { FormState, createMessage } from "@/actions/emails";

export default function Section31() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(createMessage, initialState);
  return (
    <section
      className={`h-screen flex items-center mt-16`}
      >
      <div
        className="flex-1"
        >
        <div>
          <h1
            className={`h1 mb-4`}
            >
            Contact us!
          </h1>
          <p
            className={`pp mb-4`}
            >
            Have questions or need assistance? Fill out the form below,<br/>and our dedicated team will get back to you promptly.
          </p>
        </div>
        <form
          action={formAction}
          className="py-4 space-y-4 grid grid-cols-2 gap-x-8 gap-y-4 w-full"
          >
          <div>
            <label
              className="text-white"
              >
              Name
              <input
                type="text"
                className="form-input"
                name="name"
                placeholder="Full Name"
                />
            </label>
            {state.errors.field && (
              <p
              className="form-error"
              >
                {state.errors.field}
              </p>
            )}
          </div>
          <div>
            <label
              className="text-white"
              >
              Email
              <input
                type="email"
                className="form-input"
                name="email"
                placeholder="Email Adress"
                />
            </label>
            {state.errors.field && (
              <p
              className="form-error"
              >
                {state.errors.field}
              </p>
            )}
          </div>
          <div>
            <label
              className="text-white"
              >
              Phone
              <input
                className="form-input"
                name="phone"
                placeholder="Phone Number"
                />
            </label>
            {state.errors.field && (
              <p
              className="form-error"
              >
                {state.errors.field}
              </p>
            )}
          </div>
          <div>
            <label
              className="text-white"
              >
              Company
              <input
                className="form-input"
                name="company"
                placeholder="Company Name"
                />
            </label>
            {state.errors.field && (
              <p
              className="form-error"
              >
                {state.errors.field}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label
              className="text-white"
              >
              Message
              <textarea
                className="form-input"
                name="company"
                placeholder="Type Your Message Here..."
                />
            </label>
            {state.errors.field && (
              <p
              className="form-error"
              >
                {state.errors.field}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn-con"
            disabled={isPending}
            >
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className="flex-1"></div>
    </section>
  )
}