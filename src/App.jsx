import {Routes, Route} from "react-router-dom";
import HomePage from "./components/pages/mainForm/HomePage";
import PizzaMenuPage from "./components/pages/pizzaMenu/PizzaMenuPage";
import CartListPage from "./components/pages/cart/CartListPage";
import NotFoundPage from "./components/pages/notFound/NotFoundPage";
import "./main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza-menu" element={<PizzaMenuPage />} />
        <Route path="/cart-list" element={<CartListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;