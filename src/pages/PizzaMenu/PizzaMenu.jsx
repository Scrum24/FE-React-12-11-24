import useFetch from "../../hooks/useFetch.jsx";
import PizzaMenuItem from "./PizzaMenuItem.jsx";
import "./pizza-page.css";

function PizzaMenu() {

  const [pizzas, error, isLoading] = useFetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  )

  if (isLoading) {
    return <div>Pizza list loading ...</div>;
  }

  return (
    <div className="menu-container">
      {error && <div>Sorry, error happened. Try one more time please.</div>}

      {pizzas.map((pizzainfo) => (
        <PizzaMenuItem info={pizzainfo} key={pizzainfo.id} />
      ))}
    </div>
  );
}

export default PizzaMenu;
