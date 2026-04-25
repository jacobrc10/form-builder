import Field from './Field'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
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

  it('renders correctly', () => {
    const { getByRole } = render(<Field {...testField} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toBeInTheDocument();
  });
 
  it('applies the correct attributes', () => {
    const { getByRole } = render(<Field {...testField} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('minLength', '2');
    expect(input).toHaveAttribute('maxLength', '100');
    expect(input).toHaveAttribute('pattern', '/^[a-zA-Z]+$/');
  });

  it('renders without optional attributes', () => {
    const field: FormField = {
      id: 'test',
      name: 'test',
      label: 'Test Field',
      type: 'text'
    };
    const { getByRole } = render(<Field {...field} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute('required');
    expect(input).not.toHaveAttribute('minLength');
    expect(input).not.toHaveAttribute('maxLength');
    expect(input).not.toHaveAttribute('pattern');
  });

  it('should have limited length when maxLength is set', async () => {
    const field : FormField = {
      id: 'test',
      name: 'test',
      label: 'Test Field',
      type: 'text',
      maxLength: 5
    }

    const { getByRole } = render(<Field {...field} />);
    const input = getByRole('textbox', { name: 'Test Field' });
    expect(input).toHaveAttribute('maxLength', '5');
    await userEvent.type(input, 'This is a long input');
    expect(input).toHaveValue('This ');
  });
})