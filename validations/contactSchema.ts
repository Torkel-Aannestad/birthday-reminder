import * as z from "zod";

export const contactSchema = z.interface({
  firstname: z
    .string()
    .nonempty({ error: "First name cannot be empty" })
    .min(3, { error: "First name must be at least 3 characters" })
    .max(255, { error: "Maximum 255 characters" }),
  lastname: z.string().max(255, { error: "Maximum 255 characters" }).optional(),
  day: z
    .string()
    .nonempty({ error: "Day cannot be empty" })
    .length(2, { error: "Wrong day value" }),
  month: z
    .string()
    .nonempty({ error: "Month cannot be empty" })
    .length(2, { error: "Wrong day value" }),
  year: z.string().length(4).optional(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
export type ContactSchemaErrorType = z.ZodError<ContactSchemaType>;
