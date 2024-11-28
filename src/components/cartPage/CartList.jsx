import CartItem from "./CartItem.jsx";
import {cartItems} from "./cartItems.js";
import Button from "../Button.jsx";
import {Link} from "react-router-dom";
import "./cart-list-body.css";

function CartList() {
  return (
    <div className="container">
      <Link to="#" className="back-link">
        ← Back to menu
      </Link>
      <h1 className="cart-title">Your cart, vlad</h1>

      <div className="cart-items">
        {cartItems.map((cardItem) => (
          <CartItem key={cardItem.id} cardItemInfo={cardItem} />
        ))}
      </div>

      <div className="cart-actions">
        <Button className="order-btn">Order pizzas</Button>
        <Button className="clear-btn">Clear cart</Button>
      </div>
    </div>
  );
}

export default CartList;
