//
//
//

import { useState } from "react";

export function ToPackEntryForm({ setList }) {
  //represents when the entry is placed in the packing list
  const [entryNumber, setEntryNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntryNumber((curVal) => curVal + 1);
    setList((curList) => {
      const newEntry = {
        id: entryNumber,
        description: e.target.itemToPack.value, //neat bit: Using html name property to pull text!
        quantity: e.target.quantityToPack.value,
        packed: false,
      };

      return [...curList, newEntry];
    });
  };

  const generateSelectBoxEntries = () => {
    const maxQuantity = 15;

    return [...Array(maxQuantity).keys()].map((_, idx) => {
      return (
        <option value={idx + 1} key={idx}>
          {idx + 1}
        </option>
      );
    });
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do we need for your trip?</h3>
      <select name="quantityToPack">{generateSelectBoxEntries()}</select>
      <input type={"text"} placeholder={"...Item"} name="itemToPack" />
      <button>Add</button>
    </form>
  );
}
