interface IEditButtons {
  isEdit: boolean;
  onEditButtonHandler: () => void;
  onSaveButtonHandler?: () => void;
}

export function EditButtons({ isEdit, onEditButtonHandler, onSaveButtonHandler }: IEditButtons) {
  return (
    <div className="mt-1">
      {isEdit ? (
        <div className="flex">
          <button
            className="mr-2 px-4 py-2 rounded-full border-[1px] border-emerald-600 text-sm text-emerald-600"
            onClick={onSaveButtonHandler}
          >
            Save
          </button>
          <button
            className="px-4 py-2 rounded-full border-[1px] hover:border-emerald-600 duration-700 text-sm text-emerald-600"
            onClick={onEditButtonHandler}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="px-4 py-2 rounded-full border-[1px] border-emerald-600 text-sm text-emerald-600"
          onClick={onEditButtonHandler}
        >
          Edit
        </button>
      )}
    </div>
  );
}
