import Field from "../Field/Field";
import { FormFieldSchema, type FormField } from "../../types/form.types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormRenderer = ({ fields }: { fields: FormField[] }) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(FormFieldSchema),
  });

  const onSubmit: SubmitHandler<FormField> = (data) => {
    console.log("Form data on submit:", data);

  };

  return (
    <>
      <form id="form-renderer" onSubmit={handleSubmit(onSubmit)}>
        {fields.length > 0 ? (
          fields.map((field: FormField) => (
            <Field
              key={field.id}
              register={register}
              errors={errors}
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
