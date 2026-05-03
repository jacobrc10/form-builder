import Field from "../Field/Field";
import type { FormField } from "../../types/form.types";
import { useState } from "react";

const FormRenderer = ({ fields }: { fields: FormField[] }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const updateFormData = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form id="form-renderer">
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
        <button type="submit" onClick={() => console.log("Form data on submit:", formData)}>
          Submit
        </button>
      </form>
    </>
  );
};

export default FormRenderer;
