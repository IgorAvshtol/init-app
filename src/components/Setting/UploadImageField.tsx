import { ChangeEvent, useRef, useState } from 'react';

import camera from 'image/camera.png';
import { EditButtons } from './EditButtons';
import { updateUserData } from 'store/auth/authThunk';
import { useAppDispatch } from 'store/store';

interface IUploadImageField {
  label: string;
  image: string;
  description: string;
  recommended: string;
}

export function UploadImageField({ label, description, recommended, image }: IUploadImageField) {
  const dispatch = useAppDispatch();
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string>(image);
  const [uploadImage, setUploadImage] = useState<File>();

  const onEditButtonHandler = () => {
    setIsEdit(!isEdit);
  };

  const onImageFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
      setUploadImage(files[0]);
    }
  };

  const onImageHandleClick = () => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  const onSaveButtonHandler = () => {
    uploadImage && dispatch(updateUserData({ image: uploadImage }));
  };

  return (
    <div className="my-8 w-full flex flex-col md:flex-row md:items-start md:justify-between sm:flex sm:flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col w-2/3">
          <label className="font-medium text-lg">{label}</label>
          <span className="mt-4 text-sm">{description}</span>
          <span className="mt-4 text-sm">{recommended}</span>
        </div>
        <button className="mt-8 relative">
          <img
            src={imageURL}
            alt="avatar"
            className="w-20 h-20 rounded-full "
            onClick={onEditButtonHandler}
          />
          {isEdit && (
            <img
              src={camera}
              alt="avatar"
              className="absolute left-0 top-[10px] w-20 h-20 rounded-full "
              onClick={onImageHandleClick}
            />
          )}
          <input
            ref={hiddenFileInput}
            type="file"
            multiple={false}
            onChange={onImageFieldChange}
            className="hidden"
          />
        </button>
      </div>
      <EditButtons
        isEdit={isEdit}
        onEditButtonHandler={onEditButtonHandler}
        onSaveButtonHandler={onSaveButtonHandler}
      />
    </div>
  );
}
