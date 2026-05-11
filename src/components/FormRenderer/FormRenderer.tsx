import Field from "../Field/Field";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSchemaBuilder } from "../../hooks/useSchemaBuilder";
import type { FormField } from "../../types/form.types";

const FormRenderer = ({ fields }: { fields: FormField[] }) => {
  const formSchema = useSchemaBuilder(fields);
  type FormFieldList = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFieldList>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFieldList> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data on submit:", data);
  };

  const getFieldError = (fieldName: string) => {
    const error = errors[fieldName as keyof FormFieldList];
    return error;
  };

  // Todo - FormFieldList needs to be abstracted since we're making the form dynamically and we won't know the field names ahead of time. 
  // We can use zod to validate the form data on submit and display errors for any fields that don't match the schema requirements. 
  // This will allow us to ensure that the form data is valid before it's submitted, even if we don't know the specific field names ahead of time.

  // Will need to adjust types accordingly and probably make a dummy application of the dynamic form field list to test
  return (
    <>
      <form id="form-renderer" onSubmit={handleSubmit(onSubmit)}>
        {fields.length > 0 ? (
          fields.map((field: FormField) => (
            <Field
              key={field.name}
              register={register}
              errors={getFieldError(field.name)}
              fieldData={field}
            />
          ))
        ) : (
          <p>No fields to display</p>
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default FormRenderer;
