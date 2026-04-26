import type { FormField } from "../../types/form.types";


interface FieldProps {
  updateFormData: (name: string, value: any) => void;
  fieldData: FormField;
};

const Field = ({
  updateFormData,
  fieldData,
}: FieldProps) => {
  return (
    <li key={fieldData.id}>
      <label htmlFor={fieldData.name}>{fieldData.label}</label>
      <input
        type={fieldData.type}
        id={fieldData.name}
        name={fieldData.name}
        required={fieldData.required}
        minLength={fieldData.minLength}
        maxLength={fieldData.maxLength}
        pattern={fieldData.pattern?.toString()}
        onChange={(e) => updateFormData(fieldData.name, e.target.value)}
      />
    </li>
  );
};

export default Field;
