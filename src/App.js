import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const itemList = [
  { id: 1, quantity: 1, description: "bag", packed: false },
  { id: 2, quantity: 3, description: "bottles os water", packed: true },
  { id: 3, quantity: 4, description: "Loaf of bread", packed: false },
  { id: 4, quantity: 2, description: "phones", packed: true },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <ParkingList />
      <Stats />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>🌴 Far Away 💼</h1>
    </div>
  );
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (description === "") return;

    const newItem = {
      id: Date.now(),
      quantity: quantity,
      description: description,
      packed: false,
    };

    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>What you need for your trip 🏞</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (v, i) => i + 1).map((sum) => (
            <option key={sum} value={sum}>
              {sum}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Text..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

function ParkingList() {
  return (
    <div>
      <ul>
        {itemList.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description} <button>❌</button>
      </span>
    </li>
  );
}

function Stats() {}

export default App;
