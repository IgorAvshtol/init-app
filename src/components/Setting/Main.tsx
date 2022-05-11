import { EditableTextField } from './EditableTextField';
import { useAppSelector } from 'store/store';
import { UploadImageField } from './UploadImageField';

export function Main() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full flex flex-col">
      <span className="font-medium text-2xl">About you</span>
      <hr className="mt-4 w-full" />
      {user && (
        <EditableTextField
          id={'name'}
          label={'Name'}
          defaultValue={user.username}
          description={
            'Your name appears on your Profile page, as your byline, and in your responses. It is a required field.'
          }
        />
      )}
      {user && (
        <EditableTextField
          id={'bio'}
          label={'Short bio'}
          defaultValue={user.bio}
          description={
            'Your short bio appears on your Profile and next to your stories. Max 160 characters.'
          }
        />
      )}
      {user && (
        <UploadImageField
          label={'Photo'}
          image={user.image}
          description="Your photo appears on your Profile page and with your stories across Medium."
          recommended="Recommended size: Square, at least 1000 pixels per side. File type: JPG, PNG or GIF."
        />
      )}
      <span className="font-medium text-2xl">Email settings</span>
      <hr className="mt-4 w-full" />
      {user && <EditableTextField id={'email'} label={'Your email'} defaultValue={user.email} />}
    </div>
  );
}
