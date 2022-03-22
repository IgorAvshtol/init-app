import React, { useEffect } from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';

import { useAuth } from '../hooks/useProvideAuth';

import { Input } from './Input';

export interface ISignUpData {
  name?: string;
  email: string;
  password: string;
}

interface ISignUpForm {
  onClose: () => void;
}

export interface IErrorData {
  email?: FieldError | undefined;
  password?: FieldError | undefined;
}

export function SignUpForm({ onClose }: ISignUpForm) {
  const auth = useAuth();
  useEffect(() => {
    if (auth.userData?.user) {
      onClose();
    }
  }, [auth.loading]);

  const onSubmitHandler = (data: ISignUpData) => {
    auth.setRegisterData(data);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpData>({ defaultValues: { name: '', email: '', password: '' } });
  const registration = (data: ISignUpData) => onSubmitHandler(data);
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
      onSubmit={handleSubmit(registration, handleError)}
    >
      <div className="flex flex-col justify-center items-center">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={'name'}
              errors={errors.name ? registerOptions.email.required : null}
              {...field}
            />
          )}
        />
      </div>
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
}
