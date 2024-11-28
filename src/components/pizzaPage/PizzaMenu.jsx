import PizzaMenuItem from "./PizzaMenuItem.jsx";
import {pizzas} from "./pizzas.js";
import "./pizza-page.css";

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
