import { ChangeEvent, useState } from 'react';

import { useAppDispatch } from 'store/store';
import { addNote } from 'store/articles/articleSlice';

interface INoteField {
  slug: string;
  note: string;
}

export function NoteField({ slug, note }: INoteField) {
  const dispatch = useAppDispatch();
  const [noteMode, setNoteMode] = useState<boolean>(false);
  const [noteText, setNoteText] = useState<string>('');

  const onInputClickHandler = () => {
    setNoteMode(true);
  };

  const onCancelClickHandler = () => {
    setNoteMode(false);
  };

  const onChangeTextField = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.currentTarget.value);
  };

  const onDoneClickHandler = () => {
    dispatch(addNote({ slug, noteText }));
  };

  return (
    <div className="relative flex items-center">
      <textarea
        onFocus={onInputClickHandler}
        onChange={onChangeTextField}
        placeholder={note ? note : noteMode ? 'Write a brief description' : 'Add a note...'}
        className={
          note
            ? 'mt-4 w-full h-full h-10 border-l-4 border-black text-black font-bold resize-none py-2 px-4 focus:outline-none'
            : noteMode
            ? 'mt-4 w-full h-full h-10 border-l-4 border-black font-thin resize-none py-2 px-4 focus:outline-none'
            : 'mt-4 w-full h-full h-10 border-l-4 font-thin resize-none py-2 px-4 focus:outline-none'
        }
      />
      {noteMode && (
        <div className="absolute right-0 bottom-0 w-24 h-10 flex flex-col items-end lg:flex-row lg:items-center lg:justify-between">
          <button className="text-sm text-zinc-500" onClick={onCancelClickHandler}>
            Cancel
          </button>
          <button className="text-sm text-green-600" onClick={onDoneClickHandler}>
            Done
          </button>
        </div>
      )}
    </div>
  );
}
