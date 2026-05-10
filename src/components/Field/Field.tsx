import type { UseFormRegister, FieldError } from "react-hook-form";
import type { FormField, FormFieldList } from "../../types/form.types";


interface FieldProps {
  register: UseFormRegister<FormFieldList>;
  errors: FieldError | undefined;
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
        {...register(fieldData.name as keyof FormFieldList, {
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
