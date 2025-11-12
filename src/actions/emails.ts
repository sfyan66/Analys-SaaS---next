"use server"

import { redirect } from "next/navigation";

export type Errors = {
  email?: string;
  field?: string;
}
export type FormState = {
  errors: Errors;
}

export async function addEmail(prevState: FormState, formData: FormData) {
  const email = formData.get("email") as string;

  const errors: Errors = {};

  if (!email) {
    errors.email = "Please Enter A Valid Email Adress"
  } 
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  redirect("/sign-up")
};

export async function createMessage(prevState: FormState, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;

  const errors: Errors = {};

  if (!name) {
    errors.field = "this field is required"
  } 
  if (!email) {
    errors.field = "this field is required"
  } 
  if (!phone) {
    errors.field = "this field is required"
  } 
  if (!company) {
    errors.field = "this field is required"
  } 
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  redirect("/sign-up")
};