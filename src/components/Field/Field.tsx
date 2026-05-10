import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { FormField } from "../../types/form.types";


interface FieldProps {
  register: UseFormRegister<FormField>;
  errors: FieldErrors<FormField>;
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
        {...register(fieldData.name as keyof FormField, {
          required: fieldData.required,
          minLength: fieldData.minLength,
          maxLength: fieldData.maxLength,
          pattern: fieldData.pattern,
        })}
      />
      {errors[fieldData.name as keyof FormField] && (
        <p style={{ color: "red" }}>
          {errors[fieldData.name as keyof FormField]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Field;
