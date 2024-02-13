import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems([...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleCheckItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        item={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
      />
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
function Form({ onAddItems }) {
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

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
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

function ParkingList({ item, onDeleteItem, onCheckItem }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <div className="stats">
      <h3>💼 You have X items in your list, and you have packed X (X%)</h3>
    </div>
  );
}

export default App;
