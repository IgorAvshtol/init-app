import { useState } from 'react';
import { EditButtons } from './EditButtons';

interface IEditableEmailField {
  label: string;
  defaultValue: string;
}

export function EditableEmailField({ label, defaultValue }: IEditableEmailField) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const onEditButtonHandler = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="my-8 flex flex-col md:flex-row md:items-start md:justify-between sm:flex sm:flex-col">
      <div className="w-2/3 flex flex-col">
        <label className="font-medium text-lg">{label}</label>
        <input
          type="email"
          disabled={!isEdit}
          defaultValue={defaultValue}
          className="w-full h-9 resize-none bg-inherit mt-2 border-b border-zinc-100 font-thin focus:outline-none"
        />
      </div>
      <EditButtons isEdit={isEdit} onEditButtonHandler={onEditButtonHandler} />
    </div>
  );
}
