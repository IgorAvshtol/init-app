import React, { useEffect } from 'react';
import { FieldError, useForm } from 'react-hook-form';

import { useAuth } from './hooks/useProvideAuth';

import { Input } from './Input';

export interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

interface ISignUpForm {
  signUpIsSuccess: () => void;
}

export interface IErrorData {
  email?: FieldError | undefined;
  password?: FieldError | undefined;
}

export function SignUpForm({ signUpIsSuccess }: ISignUpForm) {
  const { user, signup } = useAuth();
  useEffect(() => {
    if (user) {
      signUpIsSuccess();
    }
  }, [user, signUpIsSuccess]);

  const onSubmitHandler = (data: ISignUpData) => {
    signup(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpData>({ defaultValues: { name: '', email: '', password: '' } });
  const registration = (data: ISignUpData) => onSubmitHandler(data);
  const handleError = (data: IErrorData) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col justify-between items-center"
      onSubmit={handleSubmit(registration, handleError)}
    >
      <div className="flex flex-col justify-center items-center">
        <Input
          {...register('name', {
            required: 'Name is required',
          })}
          label="Name"
          errors={errors?.name?.message ?? null}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Input
          {...register('email', {
            required: 'Email is required',
          })}
          label="Email"
          errors={errors?.email?.message ?? null}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Input
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Password must have at least 8 characters' },
          })}
          label="Password"
          errors={errors?.password?.message ?? null}
        />
      </div>
      <button className="mt-5 bg-emerald-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Submit
      </button>
    </form>
  );
}
