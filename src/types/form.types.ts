import { z } from "zod";

export const FormFieldSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: z.enum(["text", "number", "email", "password", "date"]),
  required: z.boolean().optional(),
  minLength: z.number().optional(),
  maxLength: z.number().optional(),
  pattern: z.instanceof(RegExp).optional()
});

export type FormField = z.infer<typeof FormFieldSchema>;

// TODO: Abstract into a more generic type that can handle dynamic field names and validation rules
export const FormFieldListSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.email(),
  password: z.string().min(8),
  birthDate: z.string().optional(),
});

export type FormFieldList = z.infer<typeof FormFieldListSchema>;
