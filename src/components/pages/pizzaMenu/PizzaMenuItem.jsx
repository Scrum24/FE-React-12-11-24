import {useState} from "react";
import Button from "./../../Button.jsx";

function PizzaMenuItem(props) {
  const {info} = props;
  const {imageUrl, name, unitPrice, ingredients, soldOut} = info;
  const ingredientsStr = convertToStr(ingredients);

  const [pizzaCount, setPizzaCount] = useState(0);

  function activatePizzaCounter() {
    setPizzaCount(1);
  }

  function decrement() {
    setPizzaCount(pizzaCount - 1);
  }

  function increment() {
    setPizzaCount(pizzaCount + 1);
  }

  return (
    <div className="pizza-item">
      <img src={imageUrl} alt={`${name} Pizza`} className="pizza-image" />

      <div className="pizza-info">
        <h2>{name}</h2>
        <p className="ingredients">{ingredientsStr}</p>

        {soldOut ? (
          <p className="sold-out">SOLD OUT</p>
        ) : (
          <p className="price">€{unitPrice}.00</p>
        )}
      </div>

      {!soldOut && (
        <div className="cart-controls">
          {pizzaCount === 0 ? (
            <Button className="add-to-cart" onClick={activatePizzaCounter}>
              ADD TO CART
            </Button>
          ) : (
            <div className="counter">
              <Button
                className="decrement"
                aria-label="Decrease quantity"
                onClick={decrement}
              >
                -
              </Button>
              <span>{pizzaCount}</span>
              <Button
                className="increment"
                aria-label="Increase quantity"
                onClick={increment}
              >
                +
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function convertToStr(arr) {
  return arr
    .map(
      (ingredient) =>
        `${ingredient.charAt(0).toUpperCase()}${ingredient.substr(1)}`
    )
    .join(", ");
}

export default PizzaMenuItem;
