import React, { useEffect } from 'react';
import { FieldError, useForm } from 'react-hook-form';

import { Input } from '../Input/Input';
import spinner from 'image/spinner.gif';
import { useAppDispatch, useAppSelector } from 'store/store';
import { registration } from 'store/auth/authThunk';
import { TypeLoadingStatus } from 'interfaces';

interface ISignUpForm {
  onSignUp: () => void;
}

export interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

export interface IErrorData {
  email?: FieldError | undefined;
  password?: FieldError | undefined;
}

export function SignUpForm({ onSignUp }: ISignUpForm) {
  const { user, loading } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      onSignUp();
    }
  }, [user, onSignUp]);
  const dispatch = useAppDispatch();
  const onSubmitHandler = (data: ISignUpData) => {
    dispatch(registration(data));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpData>({ defaultValues: { name: '', email: '', password: '' } });
  const onSubmit = (data: ISignUpData) => onSubmitHandler(data);
  const handleError = (data: IErrorData) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col justify-between items-center"
      onSubmit={handleSubmit(onSubmit, handleError)}
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
      {loading === TypeLoadingStatus.IS_PENDING ? (
        <img src={spinner} alt="spinner" />
      ) : (
        <button className="mt-5 bg-emerald-300 hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Submit
        </button>
      )}
    </form>
  );
}
