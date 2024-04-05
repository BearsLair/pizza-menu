import Pizza from "./components/Pizza";
import "./App.css";
import pizzaList from "./pizza-data";

console.log(pizzaList);

function App() {
  return (
    <>
      <h1 className="title">Little Bear Pizza Co.</h1>
      <hr />
      <div className="pizza-list">
        {pizzaList.map((pizza) => (
          <Pizza
            name={pizza.name}
            img={pizza.img}
            description={pizza.description}
            id={pizza.id}
            key={pizza.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
