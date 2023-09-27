import { PackingItem } from "./PackingItem";
//
// display the list items here
//
export function PackingList({ itemsToPack, setList }) {
  //
  const buildListItems = () => {
    return itemsToPack.map((todo) => {
      return <PackingItem toPack={todo} setList={setList} key={todo.id} />;
    });
  };
  const handleClearList = () => {
    const clearList = window.confirm("Clear Packing List?");
    if (clearList) {
      setList([]);
    }
  };
  //
  return (
    <div className="list">
      <ul>{buildListItems()}</ul>
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
}
