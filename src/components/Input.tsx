import React from 'react';

interface InputProps extends React.ComponentProps<'input'> {
  name: string;
  label: string;
  errors: string | null;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, label, errors, ...inputProps } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor={name}>{label}:</label>
      <input ref={ref} id={name} {...inputProps} className="border-2 mt-1 pl-2" />
      {errors && <small className="text-danger">{errors}</small>}
    </div>
  );
});

Input.displayName = 'Input';
