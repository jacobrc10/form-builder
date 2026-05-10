import Field from './Field'
import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import type { FormField } from '../../types/form.types'
import type { FieldError } from 'react-hook-form'


describe('Field', () => {

  const testField: FormField = {
      name: 'test',
      label: 'Test Field',
      type: 'text',
      required: true,
      minLength: 2,
      maxLength: 100,
      pattern: /^[a-zA-Z]+$/
  };
  const register = vi.fn();
  const errors = undefined;

  const generateError = (type: string, message: string): FieldError => {
    return {
      type,
      message,
    };
  };

  it('should render correctly', () => {
    const { getByRole } = render(<Field fieldData={testField} register={register} errors={errors} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toBeInTheDocument();
  });

  it('should display the correct label', () => {
    const { getByText } = render(<Field fieldData={testField} register={register} errors={errors} />);
    const label = getByText('Test Field');
    expect(label).toBeInTheDocument();
  });

  it('should display an error message when minLength validation fails', () => {
    const errorMessage = 'Minimum length is 2';
    const error = generateError('minLength', errorMessage);
    const { getByText } = render(<Field fieldData={testField} register={register} errors={error} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('should display an error message when maxLength validation fails', () => {
    const errorMessage = 'Maximum length is 100';
    const error = generateError('maxLength', errorMessage);
    const { getByText } = render(<Field fieldData={testField} register={register} errors={error} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('should display an error message when pattern validation fails', () => {
    const errorMessage = 'Invalid format';
    const error = generateError('pattern', errorMessage);
    const { getByText } = render(<Field fieldData={testField} register={register} errors={error} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
})