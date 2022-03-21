import React, { forwardRef } from 'react';

interface IInput {
  register: any;
  registeroptions: IRegisterOptions;
  errors: any;
  type: 'name' | 'email' | 'password';
}

interface IRegisterOptions {
  name?: INameOptions;
  email: IEmailOptions;
  password: IPasswordOptions;
}

interface INameOptions {
  required: string;
}

interface IEmailOptions {
  required: string;
}

interface IPasswordOptions {
  required: string;
  minLength: IMinLength;
}

interface IMinLength {
  value: number;
  message: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { register, type, errors, registeroptions } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <label>{type}:</label>
      <input
        className="border-2 mt-1 pl-2"
        ref={ref}
        type={type === 'name' ? 'text' : type}
        {...register(type, registeroptions[`${type}`])}
      />
      <small className="text-danger">{errors?.[type] && errors[type].message}</small>
    </div>
  );
});

Input.displayName = 'Input';
