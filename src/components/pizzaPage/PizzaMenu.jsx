import PizzaMenuItem from "./PizzaMenuItem.jsx";
import "./pizza-page.css";
import {useEffect, useState} from "react";

function PizzaMenu() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getDefaultPizzaList = async () => {
      try {
        const res = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );

        if (res.status !== 200) {
          throw new Error("Get request, response is not ok.");
        }

        const data = await res.json();
        setPizzas(data.data);
      } catch (e) {
        console.log("Get defaultPizzaList error:", e);
      }
    };

    getDefaultPizzaList();
  }, []);

  return (
    <div className="menu-container">
      {pizzas.map((pizzainfo) => (
        <PizzaMenuItem info={pizzainfo} key={pizzainfo.id} />
      ))}
    </div>
  );
}

export default PizzaMenu;
