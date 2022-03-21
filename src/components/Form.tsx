import React, { Dispatch, SetStateAction, useContext } from 'react';
import { FieldError, useForm } from 'react-hook-form';

import { Input } from './Input';
import { userDataContext } from '../App';

interface IForm {
  signUpModalOpen: boolean;
  signInModalOpen: boolean;
  setRegisterData: Dispatch<SetStateAction<ISignUpData | undefined>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
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

export function Form({ signUpModalOpen, signInModalOpen, setRegisterData, setIsOpen }: IForm) {
  const contextData = useContext(userDataContext);
  if (contextData) setIsOpen(false);
  const onSubmitButtonHandler = (data: ISignUpData) => {
    setRegisterData(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpData>();
  const handleRegistration = (data: ISignUpData) => onSubmitButtonHandler(data);
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
      onSubmit={handleSubmit(handleRegistration, handleError)}
    >
      {!signInModalOpen && signUpModalOpen && (
        <div className="flex flex-col justify-center items-center">
          <Input
            register={register}
            registeroptions={registerOptions}
            errors={errors}
            type={'name'}
          />
        </div>
      )}
      <div className="flex flex-col justify-center items-center">
        <Input
          register={register}
          registeroptions={registerOptions}
          errors={errors}
          type={'email'}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Input
          register={register}
          registeroptions={registerOptions}
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
