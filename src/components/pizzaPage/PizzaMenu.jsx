import PizzaMenuItem from "./PizzaMenuItem.jsx";
import {pizzas} from "./pizzas.js";

function PizzaMenu() {
  return (
    <div className="menu-container">
      {pizzas.map((pizzainfo) => (
        <PizzaMenuItem info={pizzainfo} key={pizzainfo.id} />
      ))}
    </div>
  );
}

export default PizzaMenu;
