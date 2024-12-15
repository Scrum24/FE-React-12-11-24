import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/MainForm/HomePage";
import PizzaMenuPage from "./pages/PizzaMenu/PizzaMenuPage";
import CartListPage from "./pages/Cart/CartListPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import OrderFormPage from "./pages/OrderForm/OrderFormPage";
import OrderStatusPage from "./pages/OrderStatus/OrderStatusPage";
import "./main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza-menu" element={<PizzaMenuPage />} />
        <Route path="/cart-list" element={<CartListPage />} />
        <Route path="/order-form" element={<OrderFormPage />} />
        <Route path="/orders/:id" element={<OrderStatusPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
