import * as z from "zod";

export const contactSchema = z.interface({
  firstname: z
    .string()
    .min(3, { error: "Minimum 3 characters" })
    .max(255, { error: "Maximum 255 characters" }),
  lastname: z.string().max(255, { error: "Maximum 255 characters" }),
  day: z.string().length(2),
  month: z.string().length(2),
  year: z.string().length(4).optional(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
export type ContactSchemaErrorType = z.ZodError<ContactSchemaType>;
