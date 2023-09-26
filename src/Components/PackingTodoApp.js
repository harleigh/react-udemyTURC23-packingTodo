/* Project based on project from TURC23 */

import { Banner } from "./Banner";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { TodoEntryForm } from "./TodoEntryForm";

export default function PackingTodoApp() {
  return (
    <div className="app">
      <Banner />
      <TodoEntryForm />
      <PackingList />
      <Stats />
    </div>
  );
}
