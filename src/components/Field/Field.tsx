import type { FormField } from "../../types/form.types";

const Field = ({
  id,
  name,
  label,
  type,
  required,
  minLength,
  maxLength,
  pattern,
} : FormField) => {
  return (
    <li key={id}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern?.toString()}
        aria-label={`${id}-form-field-input`}
      />
    </li>
  );
};

export default Field