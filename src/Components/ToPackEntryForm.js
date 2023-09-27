//
//
//

import { useState } from "react";

export function ToPackEntryForm({ setList }) {
  //represents when the entry is placed in the packing list
  const [entryNumber, setEntryNumber] = useState(0);
  const [itemToPack, setItemToPack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntryNumber((curVal) => curVal + 1);
    setList((curList) => {
      const newEntry = {
        id: entryNumber,
        description: itemToPack,
        quantity: e.target.quantityToPack.value, //neat bit: Using html name property to pull text!
        packed: false,
      };
      return [...curList, newEntry];
    }); //end setList
    setItemToPack("");
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

  //I wonder if we can avoid using state for the input text and reset the form at the same time...
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do we need for your trip?</h3>
      <select name="quantityToPack">{generateSelectBoxEntries()}</select>
      <input
        type={"text"}
        placeholder={"...Item"}
        value={itemToPack}
        onChange={(e) => setItemToPack(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
