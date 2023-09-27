import { PackingItem } from "./PackingItem";
//
// display the list items here
//
export function PackingList({ itemsToPack, setList }) {
  const buildListItems = () => {
    return itemsToPack.map((todo) => {
      return <PackingItem toPack={todo} setList={setList} key={todo.id} />;
    });
  };
  return (
    <div className="list">
      <ul>{buildListItems()}</ul>
    </div>
  );
}
