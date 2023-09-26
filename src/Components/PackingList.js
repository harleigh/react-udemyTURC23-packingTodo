import { PackingItem } from "./PackingItem";
//
// display the list items here
//
export function PackingList({ itemsToPack }) {
  const buildListItems = () => {
    return itemsToPack.map((todo) => {
      return <PackingItem title={todo.description} key={todo.id} />;
    });
  };
  return (
    <div className="list">
      <ul>{buildListItems()}</ul>
    </div>
  );
}
