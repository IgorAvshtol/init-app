import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input test', () => {
  it('test for label', () => {
    render(<Input name={'name'} label={'Email'} errors={null} />);
    const field = screen.getByLabelText('Email:');
    expect(field).toBeInTheDocument();
  });
  it('test for input value', () => {
    render(<Input name={'name'} label={'Name'} errors={null} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'any value' } });
    expect(input).toHaveValue('any value');
  });
  it('test error field', () => {
    render(<Input name={'password'} label={'Password'} errors={'Password is required'} />);
    const errorField = screen.getByText('Password is required');
    expect(errorField).toBeInTheDocument();
  });
});
