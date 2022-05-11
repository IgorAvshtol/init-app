import React, { ComponentProps, forwardRef } from 'react';
import resetBtn from 'image/reset.png';

interface BodyFieldProps extends ComponentProps<'textarea'> {
  name: string;
  reset: () => void;
  errors: string | null;
}

export const BodyField = forwardRef<HTMLTextAreaElement, BodyFieldProps>((props, ref) => {
  const { name, errors, reset, ...inputProps } = props;
  const onResetButtonHandler = () => {
    reset();
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      <textarea
        {...inputProps}
        placeholder="Body..."
        id={name}
        ref={ref}
        name={name}
        className=" mt-2 border-2 resize-none w-full p-2 h-56 border-none focus:outline-none"
      />
      <img
        src={resetBtn}
        alt="reset"
        className="absolute w-8 right-4 bottom-0"
        onClick={onResetButtonHandler}
      />
      {errors && <small className="text-danger">{errors}</small>}
    </div>
  );
});

BodyField.displayName = 'BodyField';
