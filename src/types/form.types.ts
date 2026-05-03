import { z } from "zod";

export const FormFieldSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  type: z.enum(["text", "number", "email", "password", "date"]),
  required: z.boolean().optional(),
  minLength: z.number().optional(),
  maxLength: z.number().optional(),
  pattern: z.instanceof(RegExp).optional()
});

export type FormField = z.infer<typeof FormFieldSchema>;
