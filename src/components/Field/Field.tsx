import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { FormField, FormFieldList } from "../../types/form.types";


interface FieldProps {
  register: UseFormRegister<FormFieldList>;
  errors: FieldErrors<FormFieldList>;
  fieldData: FormField;
};

const Field = ({
  register,
  errors,
  fieldData,
}: FieldProps) => {
  return (
    <div>
      <label htmlFor={fieldData.name}>{fieldData.label}</label>
      <input
        {...register(fieldData.name as keyof FormFieldList, {
          required: fieldData.required,
          minLength: fieldData.minLength,
          maxLength: fieldData.maxLength,
          pattern: fieldData.pattern,
        })}
      />
      {errors[fieldData.name as keyof FormFieldList] && (
        <p style={{ color: "red" }}>
          {errors[fieldData.name as keyof FormFieldList]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Field;
