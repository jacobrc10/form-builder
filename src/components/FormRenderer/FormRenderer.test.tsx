import FormRenderer from "./FormRenderer";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { formFields } from "../../constants/formFieldData";
import type { FormField } from "../../types/form.types";


describe('FormRenderer', () => {

    const testField: FormField = {
        id: 'test',
        name: 'test',
        label: 'Test Field',
        type: 'text',
        required: true,
        minLength: 2,
        maxLength: 100,
        pattern: /^[a-zA-Z]+$/
    };

    
  it('should render form fields', () => {
    const { getByRole } = render(<FormRenderer fields={[testField]} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toBeInTheDocument();
  });

  it('should render the correct number of fields', () => {
    const { getByLabelText } = render(<FormRenderer fields={formFields} />);
    const inputLabels = formFields.map(field => field.label);
    let inputs = [];
    inputLabels.forEach(label => {
      const input = getByLabelText(label);
      inputs.push(input);
    });
    expect(inputs.length).toBe(formFields.length);
  });

  it('should handle an empty fields array', () => {
    const EMPTY_ARRAY_MESSAGE = 'No fields to display';
    const { getByText } = render(<FormRenderer fields={[]} />);
    const noFieldsMessage = getByText(EMPTY_ARRAY_MESSAGE);
    expect(noFieldsMessage).toBeInTheDocument();
  });

  // TODO Create tests for form submission and state updates when fields are changed

});