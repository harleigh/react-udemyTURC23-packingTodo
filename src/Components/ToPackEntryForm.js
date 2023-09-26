//
//
//
// need to set the todo list here
export function ToPackEntryForm() {
  //
  //
  //
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const generateSelectBoxEntries = () => {
    const maxQuantity = 15;

    return [...Array(maxQuantity).keys()].map((_, idx) => {
      return <option value={idx}>{idx + 1}</option>;
    });
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do we need for your trip?</h3>
      <select>{generateSelectBoxEntries()}</select>
      <input type={"text"} placeholder={"...Item"} />
      <button>Add</button>
    </form>
  );
}
