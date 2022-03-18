import React from 'react';
import { useForm } from 'react-hook-form';

import { IErrorData } from './SignUpForm';
import { Input } from './Input';

interface ISignInData {
  email: string;
  password: string;
}

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInData>();
  const handleRegistration = (data: ISignInData) => console.log(data);
  const handleError = (data: IErrorData) => {
    console.log(data);
  };

  const registerOptions = {
    email: { required: 'Email is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
  };

  return (
    <form
      className="flex flex-col justify-between items-center"
      onSubmit={handleSubmit(handleRegistration, handleError)}
    >
      <Input register={register} registerOptions={registerOptions} errors={errors} type={'email'} />
      <div className="flex flex-col justify-center items-center">
        <Input
          register={register}
          registerOptions={registerOptions}
          errors={errors}
          type={'password'}
        />
      </div>
      <button className="mt-5 bg-emerald-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Submit
      </button>
    </form>
  );
}
