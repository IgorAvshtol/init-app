import { ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  label: string;
  errors?: string | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, label, errors, ...inputProps } = props;
  return (
    <div className="flex flex-col justify-center items-center ">
      <label htmlFor={name}>{label ? label + ':' : null}</label>
      <input
        id={name}
        type={name}
        ref={ref}
        name={name}
        {...inputProps}
        className="border-2 mt-1 pl-2"
      />
      {errors && <small className="text-danger">{errors}</small>}
    </div>
  );
});

Input.displayName = 'Input';
