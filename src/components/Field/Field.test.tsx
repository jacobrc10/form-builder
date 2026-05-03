import Field from './Field'
import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { FormField } from '../../types/form.types'


describe('Field', () => {

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
  const mockUpdateFormData = vi.fn();

  it('should render correctly', () => {
    const { getByRole } = render(<Field fieldData={testField} updateFormData={mockUpdateFormData} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toBeInTheDocument();
  });
 
  it('should apply the correct attributes', () => {
    const { getByRole } = render(<Field fieldData={testField} updateFormData={mockUpdateFormData} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('minLength', '2');
    expect(input).toHaveAttribute('maxLength', '100');
    expect(input).toHaveAttribute('pattern', '/^[a-zA-Z]+$/');
  });

  it('should render without optional attributes', () => {
    const field: FormField = {
      id: 'test',
      name: 'test',
      label: 'Test Field',
      type: 'text'
    };
    const { getByRole } = render(<Field fieldData={field} updateFormData={mockUpdateFormData} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute('required');
    expect(input).not.toHaveAttribute('minLength');
    expect(input).not.toHaveAttribute('maxLength');
    expect(input).not.toHaveAttribute('pattern');
  });

  it('should have limited length when maxLength is set', async () => {
    const MAX_LENGTH = 5;
    const TEST_STRING = '1234567';
    const field : FormField = {
      id: 'test',
      name: 'test',
      label: 'Test Field',
      type: 'text',
      maxLength: MAX_LENGTH
    }

    const { getByRole } = render(<Field fieldData={field} updateFormData={mockUpdateFormData} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toHaveAttribute('maxLength', MAX_LENGTH.toString());

    // Test that maxLength limits user input (browser-enforced behavior)
    await userEvent.type(input, TEST_STRING);
    expect(input).toHaveValue(TEST_STRING.slice(0, MAX_LENGTH));
  });
})