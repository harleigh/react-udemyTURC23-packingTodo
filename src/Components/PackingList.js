import { PackingItem } from "./PackingItem";
//
// display the list items here
//
import { useState } from "react";

const sortTypes = {
  byInput: "i",
  byDescription: "d",
  byPacked: "p",
};

export function PackingList({ itemsToPack, setList }) {
  //
  const [sortBy, setSortBy] = useState(sortTypes["byInput"]);

  const buildSortedItems = () => {
    if (sortBy === sortTypes["byInput"]) {
      return itemsToPack.slice().sort((a, b) => a.id - b.id);
    } else if (sortBy === sortTypes["byDescription"]) {
      return itemsToPack
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    } else {
      return itemsToPack
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
    }
  };

  const buildListItems = () => {
    const sortedItemsToPack = buildSortedItems();
    return sortedItemsToPack.map((todo) => {
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
      {/* actions of clearing list or sorting list */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={sortTypes["byInput"]}>Sort by Input Order</option>
          <option value={sortTypes["byDescription"]}>
            Sort by Description
          </option>
          <option value={sortTypes["byPacked"]}>Sort by Packed Status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
