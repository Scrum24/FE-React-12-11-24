import Button from "../Button.jsx";

function CartItem(props) {
  const {cardItemInfo} = props;
  const {name, price, quantity} = cardItemInfo;

  return (
    <div className="cart-item">
      <span className="quantity-text">{quantity}×</span>
      <span>{name}</span>
      <span className="price">€{price * quantity}</span>

      <div className="quantity-controls">
        <Button className="quantity-btn">-</Button>
        <span>{quantity}</span>
        <Button className="quantity-btn">+</Button>
        <Button className="delete-btn">DELETE</Button>
      </div>
    </div>
  );
}

export default CartItem;
