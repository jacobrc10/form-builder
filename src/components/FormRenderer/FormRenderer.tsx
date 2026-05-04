import Field from "../Field/Field";
import type { FormField } from "../../types/form.types";
import { useState } from "react";

const FormRenderer = ({ fields }: { fields: FormField[] }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form data on submit:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <form id="form-renderer" onSubmit={handleSubmit}>
        {fields.length > 0 ? (
          fields.map((field: FormField) => (
            <Field
              key={field.id}
              updateFormData={updateFormData}
              fieldData={field}
            />
          ))
        ) : (
          <p>No fields to display</p>
        )}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </>
  );
};

export default FormRenderer;
