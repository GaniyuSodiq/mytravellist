import logo from "./logo.svg";
import "./App.css";

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
  return (
    <div>
      <form>
        <h3>What you need for your trip 🏞</h3>
        <select>
          <option>1</option>
        </select>
        <input></input>
        <button>ADD</button>
      </form>
    </div>
  );
}

function ParkingList() {
  return (
    <div>
      <ul></ul>
    </div>
  );
}
function Stats() {}
function Item() {}

export default App;
