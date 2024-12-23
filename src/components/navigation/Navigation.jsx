import {Link} from "react-router-dom";
import "./navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Main</Link>
      <Link to="/pizza-menu">Pizza menu</Link>
      <Link to="/cart-list">Carts</Link>
      <Link to="/order-form">Order form page</Link>
      <Link to="/orders/111">Order status page (example)</Link>
    </nav>
  );
}
export default Navigation;
