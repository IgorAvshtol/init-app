import React from 'react';
import { FieldError, useForm, Controller } from 'react-hook-form';

import { Input } from './Input';

export interface ISignInData {
  email: string;
  password: string;
}

export interface IErrorData {
  email?: FieldError | undefined;
  password?: FieldError | undefined;
}

export const SignInForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignInData>({ defaultValues: { password: '' } });
  const handleRegistration = (data: ISignInData) => console.log('data', data);
  const handleError = (data: IErrorData) => {
    console.log(data);
  };

  const registerOptions = {
    name: { required: 'Name is required' },
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
      onSubmit={handleSubmit(handleRegistration)}
    >
      <div className="flex flex-col justify-center items-center">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={'email'}
              errors={errors.email ? registerOptions.email.required : null}
              {...field}
            />
          )}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={'password'}
              errors={errors.password ? registerOptions.password.required : null}
              {...field}
            />
          )}
        />
      </div>
      <button className="mt-5 bg-emerald-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Submit
      </button>
    </form>
  );
};
