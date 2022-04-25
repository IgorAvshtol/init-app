import { List } from './List';

export function Lists() {
  return (
    <div className="w-3/4 flex flex-col justify-start">
      <p className="text-5xl font-bold">Your list</p>
      <hr className="mt-12 w-full" />
      <List />
    </div>
  );
}
