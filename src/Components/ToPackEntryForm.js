//
//
//Note: // quantity: e.target.quantityToPack.value, isneat bit: Using html name property to pull text!
//but, this is not a 'controled' approach, that is the DOM is controlling it, not React. React's idea
//is to control the bits by turning it to state.

import { useState } from "react";

export function ToPackEntryForm({ setList }) {
  //represents when the entry is placed in the packing list
  const [entryNumber, setEntryNumber] = useState(0);
  const [itemToPack, setItemToPack] = useState("");
  const [quantityToPack, setQuantityToPack] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntryNumber((curVal) => curVal + 1);
    setList((curList) => {
      const newEntry = {
        id: entryNumber,
        description: itemToPack,
        quantity: quantityToPack,
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

  //grey out the button, or make it teal-ish
  const applyButtonStyle = () => {
    return itemToPack === ""
      ? { backgroundColor: "#808080" }
      : { backgroundColor: "#76c7ad" };
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do we need for your trip?</h3>
      <select
        name="quantityToPack"
        onChange={(e) => setQuantityToPack(Number(e.target.value))}
      >
        {generateSelectBoxEntries()}
      </select>
      <input
        type={"text"}
        placeholder={"...Item"}
        value={itemToPack}
        onChange={(e) => setItemToPack(e.target.value)}
      />
      <button disabled={itemToPack === ""} style={applyButtonStyle()}>
        Add
      </button>
    </form>
  );
}
