import type { UseFormRegister, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import type { FormField } from "../../types/form.types";


interface FieldProps {
  register: UseFormRegister<Record<string, unknown>>;
  errors: Merge<FieldError, FieldErrorsImpl<{}>> | undefined;
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
        id={fieldData.name}
        {...register(fieldData.name as keyof Record<string, unknown>, {
          required: fieldData.required,
          minLength: fieldData.minLength,
          maxLength: fieldData.maxLength,
          pattern: fieldData.pattern,
        })}
      />
      {errors && (
        <p style={{ color: "red" }}>
          {errors.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Field;
