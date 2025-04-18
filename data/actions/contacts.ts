"use server";

import {
  contactSchema,
  ContactSchemaType,
  ContactSchemaErrorType,
} from "@/validations/contactSchema";
import { redirect } from "next/navigation";

import * as z from "zod";

// Todo: swap out _prevState:any med typed value
type ContactFormState = {
  data?: ContactSchemaType;
  errors?: ContactSchemaErrorType;
};

export async function createContact(_prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);

  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return {
      data: data as ContactSchemaType,
      errors: z.treeifyError(result.error),
    };
  }
  const id = "10";
  redirect(`/app/contacts/${id}`);
}

export async function updateContact(
  contactId: string,
  _prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData);

  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return {
      data: data as ContactSchemaType,
      errors: z.treeifyError(result.error),
    };
  }
  // return {
  //   data: data as ContactSchemaType,
  //   errors: null,
  // };

  redirect(`/app/contacts/${contactId}`);
}
