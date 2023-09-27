//
//packing item consists of a checkbox (to mark whether complete),
//the quantity, description (of item to be packed) and a button to delete the packing item
//
export function PackingItem({ toPack, setList }) {
  //
  const toggleCheckbox = (idOfChecked, checkStatus) => {
    setList((curList) => {
      return curList.map((itemToPack) => {
        if (itemToPack.id === idOfChecked) {
          return { ...itemToPack, packed: checkStatus }; //we modify itemToPack's "packed" field
        } else {
          return itemToPack;
        }
      });
    });
  };

  const removeFromList = (idToDelete) => {
    setList((curList) => {
      return curList.filter((item) => item.id !== idToDelete);
    });
  };

  const displayDescription = () => {
    return toPack.packed ? (
      <span className="packingItemComplete">{toPack.description}</span>
    ) : (
      <span>{toPack.description}</span>
    );
  };

  return (
    <li>
      <input
        type={"checkbox"}
        checked={toPack.packed}
        onChange={(e) => toggleCheckbox(toPack.id, e.target.checked)}
      />
      {displayDescription()}
      <button onClick={() => removeFromList(toPack.id)}>❌</button>
    </li>
  );
}
