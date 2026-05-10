import type { FormField } from "../types/form.types";

export const formFields: FormField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    minLength: 2,
    maxLength: 50,
  },
    {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    minLength: 8,
  },
  {
    name: "birthDate",
    label: "Birth Date",
    type: "date",
    required: false,
  },
];