import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import React from 'react';

import { Input } from '../../Input/Input';
import { Header } from './Header';
import { useArticles } from 'hooks/useArticles';
import { IArticle } from 'interfaces';

interface IAddArticle {
  article: INewArticleData;
}

type INewArticleData = FieldValues & {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export function Form() {
  const { addArticle } = useArticles<IArticle>();

  const onSubmitButtonHandler = async (data: INewArticleData) => {
    await addArticle<IAddArticle>(`articles`, { article: data });
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<INewArticleData>({ mode: 'all' });
  const registration = (data: INewArticleData) => onSubmitButtonHandler(data);
  const { fields, append, remove } = useFieldArray<INewArticleData>({
    control,
    name: 'tagList',
  });
  const addFieldButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    append('');
  };
  const onDeleteButtonHandler = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    remove(index);
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit(registration)}
    >
      <Header />
      <div className="relative w-80 mt-6 flex flex-col">
        <Input
          {...register('title', {
            required: 'Title is required',
          })}
          label="Title"
          errors={errors?.title?.message ?? null}
        />
        <Input
          {...register('description', {
            required: 'Description is required',
          })}
          label="Description"
          errors={errors?.description?.message ?? null}
        />
        <div className="flex flex-col items-center">
          <textarea
            placeholder="Body..."
            {...register('body', { required: 'Body is required' })}
            className="mt-2 border-2 w-full p-2"
          />
          {errors?.body?.message ?? null}
        </div>
        {fields.map((field, index) => (
          <div key={field.id} className="mt-2">
            <Input
              {...register(`tagList.${index}`)}
              label={'Tag'}
              errors={errors?.body?.message ?? null}
            />
            <button
              className="absolute bottom-7 right-[-22px]"
              onClick={(e) => onDeleteButtonHandler(e, index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button onClick={addFieldButtonHandler}>Add Tag</button>
      </div>
      <button className="mt-5 bg-emerald-300 hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Submit
      </button>
    </form>
  );
}
