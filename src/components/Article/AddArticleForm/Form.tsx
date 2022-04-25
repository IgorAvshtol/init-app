import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Input } from '../../Input/Input';
import { Header } from './Header';
import { BodyField } from './BodyField';
import { useAppDispatch, useAppSelector } from 'store/store';
import { addArticle, updateArticle } from 'store/articles/articlesThunk';
import { DeleteButton } from './DeleteButton';
import { Popup } from './Popup';

type INewArticleData = FieldValues & {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export function Form() {
  const { slug } = useParams<string>();
  const dispatch = useAppDispatch();
  const { currentArticle } = useAppSelector((state) => state.articles);
  const onSubmitButtonHandler = (data: INewArticleData) => {
    if (slug) {
      dispatch(updateArticle({ slug, ...data }));
    } else {
      dispatch(addArticle(data));
    }
  };
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewArticleData>({
    mode: 'all',
    defaultValues: {
      title: slug && currentArticle?.title,
      description: slug && currentArticle?.description,
      body: slug && currentArticle?.body,
      tagList: slug ? currentArticle?.tagList : [],
    },
  });
  const submit = (data: INewArticleData) => onSubmitButtonHandler(data);
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
    <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(submit)}>
      <Header />
      <Popup />
      <div className="relative w-2/3 mt-6 flex flex-col">
        <Input
          placeholder="Title..."
          {...register('title', {
            required: 'Title is required',
          })}
          label="Title"
          errors={errors?.title?.message ?? null}
        />
        <Input
          placeholder="Description..."
          {...register('description', {
            required: 'Description is required',
          })}
          label="Description"
          errors={errors?.description?.message ?? null}
        />
        <BodyField
          {...register('body', { required: 'Body is required' })}
          reset={() => reset({ body: '' })}
          errors={errors?.body?.message ?? null}
        />
        {fields.map((field, index) => (
          <div key={field.id} className="mt-2">
            <Input
              errors={null}
              {...register(`tagList.${index}`)}
              label={'Tag'}
              placeholder={'Tag'}
            />
            <button
              className="absolute bottom-7 right-[-22px] font-semibold"
              onClick={(e) => onDeleteButtonHandler(e, index)}
            >
              Delete
            </button>
          </div>
        ))}
        <div className="w-full flex justify-center">
          <button className="mt-5 w-24 font-semibold" onClick={addFieldButtonHandler}>
            Add Tag
          </button>
        </div>
      </div>
      <button className="mt-5 bg-emerald-300 hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        {slug ? 'Update' : 'Submit'}
      </button>
      {slug && <DeleteButton />}
    </form>
  );
}
