import {Routes, Route} from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import PizzaMenuPage from "./components/pizzaPage/PizzaMenuPage";
import CartListPage from "./components/cartPage/CartListPage";
import "./main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza-menu" element={<PizzaMenuPage />} />
        <Route path="/cart-list" element={<CartListPage />} />
      </Routes>
    </>
  );
}

export default App;
