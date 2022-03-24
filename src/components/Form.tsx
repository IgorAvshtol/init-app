import React from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';

import { Input } from './Input';

interface IForm {
  isSignInModalOpen: boolean;
  isSignUpModalOpen: boolean;
}

export interface ISignUpData {
  name?: string;
  email: string;
  password: string;
}

export interface IErrorData {
  email?: FieldError | undefined;
  password?: FieldError | undefined;
}

export function Form({ isSignInModalOpen, isSignUpModalOpen }: IForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpData>();
  const handleRegistration = (data: ISignUpData) => console.log(data);
  const handleError = (data: IErrorData) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col justify-between items-center"
      onSubmit={handleSubmit(handleRegistration)}
    >
      {!isSignInModalOpen && isSignUpModalOpen && (
        <div className="flex flex-col justify-center items-center">
          <Input
            {...register('name', {
              required: 'Name is required',
            })}
            label="Name"
            errors={errors?.name?.message ?? null}
          />
        </div>
      )}
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
