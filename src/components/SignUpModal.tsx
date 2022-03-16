import { useForm } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';

interface ISignUpModal {
  setSignUpModalOn: Dispatch<SetStateAction<boolean>>;
}

export function SignUpModal({ setSignUpModalOn }: ISignUpModal) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data: any) => console.log(data);
  const handleError = (data: any) => {
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
  const onClothClickHandler = (e: any) => {
    e.stopPropagation();
    setSignUpModalOn(false);
  };

  return (
    <div className="fixed w-full h-full flex justify-center items-center left-0 top-0 bg-slate-400">
      <div className="relative w-80 h-80">
        <div
          onClick={onClothClickHandler}
          className="absolute top-0 right-0 rounded-full h-6 w-6 flex justify-center items-center bg-fuchsia-50"
        >
          X
        </div>
        <div className="flex justify-center items-center">
          <form
            className="flex-col w-80 h-80 flex justify-around items-center bg-emerald-400 rounded-xl"
            onSubmit={handleSubmit(handleRegistration, handleError)}
          >
            <div className="flex flex-col justify-center items-center">
              <div>Name:</div>
              <input
                className="border-2 mt-1 pl-2"
                type="text"
                {...register('name', registerOptions.name)}
              />
              <small className="text-danger">{errors?.name && errors.name.message}</small>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label>Email:</label>
              <input
                className="border-2 mt-1 pl-2"
                type="email"
                {...register('email', registerOptions.email)}
              />
              <small className="text-danger">{errors?.email && errors.email.message}</small>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label>Password:</label>
              <input
                className="border-2 mt-1 pl-2"
                type="password"
                {...register('password', registerOptions.password)}
              />
              <small className="text-danger">{errors?.password && errors.password.message}</small>
            </div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
