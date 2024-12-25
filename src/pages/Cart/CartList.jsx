import CartItem from "./CartItem.jsx";
import {cartItems} from "./cartItems.js";
import Button from "../../components/Button.jsx";
import {Link} from "react-router-dom";
import "./cart-list-body.css";
import {useContext} from "react";
import {PizzaContext} from "../../contexts/PizzaContextProvider";

function CartList() {
    const { removeAllPizzas, state : {preOrderPizzaList}} = useContext(PizzaContext);

  return (
    <div className="container">
      <Link to="#" className="back-link">
        ← Back to menu
      </Link>
      <h1 className="cart-title">Your cart, vlad</h1>

      <div className="cart-items">
        {preOrderPizzaList.map((cardItem) => (
          <CartItem key={cardItem.id} cardItemInfo={cardItem} />
        ))}
      </div>

      <div className="cart-actions">
        <Button className="order-btn">Order pizzas</Button>
        <Button className="clear-btn" onClick={removeAllPizzas}>Clear cart</Button>
      </div>
    </div>
  );
}

export default CartList;
