"use server";

import { redirect } from "next/navigation";

export type Errors = {
  email?: string;
  name?: string;
  phone?: string;
  company?: string;
  message?: string;
  field?: string;
};

export type FormState = {
  errors: Errors;
};

export async function addEmail(prevState: FormState, formData: FormData) {
  const email = formData.get("email") as string;

  const errors: Errors = {};

  if (!email) {
    errors.email = "Please Enter A Valid Email Adress";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  redirect("/contact");
}

export async function createMessage(prevState: FormState, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  const errors: Errors = {};

  if (!name) {
    errors.name = "name is required";
  }
  if (!email) {
    errors.email = "email is required";
  }
  if (!phone) {
    errors.phone = "phone number is required";
  }
  if (!company) {
    errors.company = "company name is required";
  }
  if (!message) {
    errors.message = "please enter your message";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  redirect("/contact");
}
