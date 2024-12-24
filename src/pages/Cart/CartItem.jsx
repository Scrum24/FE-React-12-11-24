import Button from "../../components/Button.jsx";
import {useContext} from "react";
import {PizzaContext} from "../../contexts/PizzaContextProvider";

function CartItem(props) {
    const { incrementPizzaCount, decrementPizzaCount, removePizza} = useContext(PizzaContext);
    const {cardItemInfo} = props;
    const {id, name, unitPrice: price, orderCount: quantity} = cardItemInfo;

  return (
    <div className="cart-item">
      <span className="quantity-text">{quantity}×</span>
      <span>{name}</span>
      <span className="price">€{price * quantity}</span>

      <div className="quantity-controls">
        <Button className="quantity-btn" onClick={() => decrementPizzaCount(id)}>-</Button>
        <span>{quantity}</span>
        <Button className="quantity-btn" onClick={() => incrementPizzaCount(cardItemInfo)}>+</Button>
        <Button className="delete-btn" onClick={() => removePizza(id)}>DELETE</Button>
      </div>
    </div>
  );
}

export default CartItem;
