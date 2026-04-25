import Field from '../Field/Field';
import type { FormField } from '../../types/form.types';

const FormRenderer = ({ fields } : { fields: FormField[] }) => {
  return (
    <form>
      {fields.map((field) => (
        <Field key={field.id} {...field} />
      ))}
    </form>
  );
};

export default FormRenderer;