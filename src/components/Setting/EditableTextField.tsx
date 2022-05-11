import { ChangeEvent, useState } from 'react';

import { EditButtons } from './EditButtons';
import { useAppDispatch } from 'store/store';
import { updateUserData } from 'store/auth/authThunk';

interface IEditableTextField {
  id: string;
  label: string;
  defaultValue: string;
  description?: string;
}

export function EditableTextField({ id, label, defaultValue, description }: IEditableTextField) {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultValue);

  const onEditButtonHandler = () => {
    setIsEdit(!isEdit);
  };

  const onNameFieldChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const onSaveButtonHandler = () => {
    id === 'name' && dispatch(updateUserData({ username: value }));
    id === 'bio' && dispatch(updateUserData({ bio: value }));
    id === 'email' && dispatch(updateUserData({ email: value }));
  };

  return (
    <div className="my-8 w-full flex flex-col md:flex-row md:items-start md:justify-between sm:flex sm:flex-col">
      <div className="w-2/3 flex flex-col">
        <label className="font-medium text-lg">{label}</label>
        <textarea
          id={id}
          maxLength={160}
          disabled={!isEdit}
          value={value}
          onChange={onNameFieldChange}
          className="w-full h-9 resize-none bg-inherit mt-2 border-b border-zinc-100 font-thin focus:outline-none"
        />
        <span className="mt-4 text-sm">{description}</span>
      </div>
      <EditButtons
        isEdit={isEdit}
        onEditButtonHandler={onEditButtonHandler}
        onSaveButtonHandler={onSaveButtonHandler}
      />
    </div>
  );
}
