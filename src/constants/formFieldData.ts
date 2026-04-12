import type { FormField } from "../types/form.types";

export const formFields: FormField[] = [
  {
    id: "test-id-1",
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    minLength: 2,
    maxLength: 50,
  },
    {
    id: "test-id-2",
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  {
    id: "test-id-3",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  {
    id: "test-id-4",
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    minLength: 8,
  },
  {
    id: "test-id-5",
    name: "birthDate",
    label: "Birth Date",
    type: "date",
    required: false,
  },
];