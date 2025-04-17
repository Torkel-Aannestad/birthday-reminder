"use server";

import {
  contactSchema,
  ContactSchemaType,
  ContactSchemaErrorType,
} from "@/validations/contactSchema";
import * as z from "zod";

type ContactFormState = {
  data: ContactSchemaType;
  errors: ContactSchemaErrorType | null;
};

export async function createContact(_prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  console.log(data);

  const result = contactSchema.safeParse(data);
  if (!result.success) {
    console.log(z.treeifyError(result.error));

    return {
      data: data as ContactSchemaType,
      errors: z.treeifyError(result.error),
    };
  }
  return {
    data: result.data,
    errors: null,
  };
}
