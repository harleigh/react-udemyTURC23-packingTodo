export function Stats({ packingTodoList }) {
  const totalItemsToPack = packingTodoList.length;

  if (totalItemsToPack === 0) {
    return (
      <div className="stats">
        <em>Start adding some items to pack.</em>
      </div>
    );
  }

  //filter returns the items that are packed
  const totalHavePacked = packingTodoList.filter((item) => {
    return item.packed === true;
  }).length;
  const percentagePacked =
    totalItemsToPack === 0
      ? 0
      : Math.round((totalHavePacked / totalItemsToPack) * 100);

  const displayFinalMessage = () => {
    return (
      <div>
        <em> Congrats! You are all packed! Safe Travels!</em>
      </div>
    );
  };
  return (
    <footer className="stats">
      <em>
        You have {totalItemsToPack} items on your packing list, and you have
        already packed {totalHavePacked} ({percentagePacked}%)
      </em>
      {totalItemsToPack !== 0 &&
        totalItemsToPack === totalHavePacked &&
        displayFinalMessage()}
    </footer>
  );
}
