import { useState } from 'react';

export function NoteField() {
  const [noteMode, setNoteMode] = useState<boolean>(false);
  const onInputClickHandler = () => {
    setNoteMode(true);
  };
  const onCancelClickHandler = () => {
    setNoteMode(false);
  };
  return (
    <div className="relative flex items-center">
      <textarea
        onFocus={onInputClickHandler}
        placeholder={noteMode ? 'Write a brief description' : 'Add a note...'}
        className={
          noteMode
            ? 'mt-4 w-full h-full h-10 border-l-4 border-black font-thin resize-none py-2 px-4 focus:outline-none'
            : 'mt-4 w-full h-full h-10 border-l-4 font-thin resize-none py-2 px-4 focus:outline-none'
        }
      />
      {noteMode && (
        <div className="absolute right-0 bottom-0 w-24 h-10 flex flex-col items-end lg:flex-row lg:items-center lg:justify-between">
          <button className="text-sm text-zinc-500" onClick={onCancelClickHandler}>
            Cancel
          </button>
          <button className="text-sm text-green-600">Done</button>
        </div>
      )}
    </div>
  );
}
