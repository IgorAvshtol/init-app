import React, { ChangeEvent, ComponentProps, forwardRef, useState } from 'react';
import reset from 'image/reset.png';

interface BodyFieldProps extends ComponentProps<'textarea'> {
  name: string;
  errors: string | null;
}

export const BodyField = forwardRef<HTMLTextAreaElement, BodyFieldProps>((props, ref) => {
  const { name, errors, ...inputProps } = props;
  const [articleBody, setArticleBody] = useState<string>('');
  const onChangeFieldBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setArticleBody(e.currentTarget.value);
  };
  const onResetButtonHandler = () => {
    setArticleBody('');
  };
  return (
    <div className="relative flex flex-col justify-center items-center">
      <textarea
        {...inputProps}
        placeholder="Body..."
        onChange={onChangeFieldBody}
        id={name}
        value={articleBody}
        ref={ref}
        name={name}
        className=" mt-2 border-2 resize-none w-full p-2 h-56 border-none focus:outline-none"
      />
      <img
        src={reset}
        alt="reset"
        className="absolute w-8 right-4 bottom-0"
        onClick={onResetButtonHandler}
      />
      {errors && <small className="text-danger">{errors}</small>}
    </div>
  );
});

BodyField.displayName = 'BodyField';
