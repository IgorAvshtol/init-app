import { useForm } from 'react-hook-form';
import React from 'react';

import { Input } from '../../Input/Input';
import { Header } from './Header';

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ defaultValues: { name: '', email: '', password: '' } });
  const registration = (data: any) => console.log(data);
  const handleError = (data: any) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col justify-between items-center bg-fuchsia-300"
      onSubmit={handleSubmit(registration, handleError)}
    >
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Input
          {...register('name', {
            required: 'Name is required',
          })}
          label="Name"
          errors={errors?.name?.message ?? null}
        />
      </div>
      <button className="mt-5 bg-emerald-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Submit
      </button>
    </form>
  );
}
