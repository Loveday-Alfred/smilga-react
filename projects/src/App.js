import { useState } from "react";
import data from "./01-birthday-reminder/setup/data";
import List from "./01-birthday-reminder/setup/List";
function App() {
  const [people, setPeople] = useState(data);

  // const handleClick = (id) => {
  //   let newPeople = people.filter((person) => person.id !== id)
  //   setPeople(newPeople);
  // };

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </>
  );
}

export default App;
