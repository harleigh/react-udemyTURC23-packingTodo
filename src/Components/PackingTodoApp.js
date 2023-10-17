/* Project based on project from TURC23 */

import { useState } from "react";
import { Banner } from "./Banner";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { ToPackEntryForm } from "./ToPackEntryForm";

export default function PackingTodoApp() {
  const [packingList, setPackingList] = useState([]);

  return (
    <div className="app">
      <Banner />
      <ToPackEntryForm setList={setPackingList} />
      <PackingList itemsToPack={packingList} setList={setPackingList} />
      <Stats packingTodoList={packingList} />
    </div>
  );
}
