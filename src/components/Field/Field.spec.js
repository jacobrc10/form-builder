import Field from './Field'
import { render } from '@testing-library/react'


describe('Field', () => {
  it('renders correctly', () => {
    const field = {
      id: 'test',
      name: 'test',
      label: 'Test Field',
      type: 'text',
      required: false,
      minLength: 2,
      maxLength: 100,
      pattern: /^[a-zA-Z]+$/
    }

    const { getByLabelText } = render(<Field {...field} />);

    const input = getByLabelText('Test Field');
    expect(input).toBeInTheDocument();
  })
})