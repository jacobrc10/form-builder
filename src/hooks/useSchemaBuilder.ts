import { z } from "zod";
import type { FormField } from "../types/form.types";

export function useSchemaBuilder(fields: FormField[]) : z.ZodObject<Record<string, z.ZodType>> {
  const schemaShape: Record<string, z.ZodType> = {};

  // returns a z.string with the appropriate validation rules based on the field properties
  const buildStringField = (field: FormField): z.ZodString => {
    let updatedSchema = z.string();

    if (field.minLength) {
      updatedSchema = updatedSchema.min(field.minLength, {
        message: `Minimum length is ${field.minLength}`,
      });
    }

    if (field.maxLength) {
      updatedSchema = updatedSchema.max(field.maxLength, {
        message: `Maximum length is ${field.maxLength}`,
      });
    }

    if (field.pattern) {
      updatedSchema = updatedSchema.regex(field.pattern, {
        message: `Invalid format`,
      });
    }

    return updatedSchema;
  };

  fields.forEach((field) => {
    let fieldSchema: z.ZodType;

    switch (field.type) {
      case "text":
        fieldSchema = buildStringField(field);
        break;
      case "number":
        fieldSchema = z.number();
        break;
      case "email":
        fieldSchema = z.email();
        break;
      case "password":
        fieldSchema = buildStringField(field);
        break;
      case "date":
        fieldSchema = z.date();
        break;
      default:
        fieldSchema = buildStringField(field);
    }

    if (!field.required) {
      fieldSchema = fieldSchema.optional();
    }

    schemaShape[field.name] = fieldSchema;
  });

  return z.object(schemaShape);
};
