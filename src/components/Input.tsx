import React from 'react';

interface IInput {
  register: any;
  registerOptions: IRegisterOptions;
  errors: any;
  type: string;
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

export function Input({ register, registerOptions, errors, type }: IInput) {
  return (
    <div className="flex flex-col justify-center items-center">
      <label>{type}:</label>
      <input
        className="border-2 mt-1 pl-2"
        type={type === 'name' ? 'text' : type}
        {...register(type, type === 'name' && registerOptions['name'])}
        {...register(type, type === 'email' && registerOptions['email'])}
        {...register(type, type === 'password' && registerOptions['password'])}
      />
      <small className="text-danger">{errors?.[type] && errors[type].message}</small>
    </div>
  );
}
