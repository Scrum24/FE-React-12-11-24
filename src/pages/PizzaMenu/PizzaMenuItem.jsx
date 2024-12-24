import {useContext, useState} from "react";
import Button from "../../components/Button.jsx";

import {PizzaContext} from "../../contexts/PizzaContextProvider";

function PizzaMenuItem(props) {
  const {incrementPizzaCount, decrementPizzaCount} = useContext(PizzaContext);

  const {info} = props;
  const {imageUrl, name, unitPrice, ingredients, soldOut} = info;
  const ingredientsStr = convertToStr(ingredients);

  const [pizzaCount, setPizzaCount] = useState(0);

  function activatePizzaCounter(info) {
    setPizzaCount(1);
    incrementPizzaCount(info);
  }

  function decrement(info) {
    setPizzaCount(pizzaCount - 1);
    decrementPizzaCount(info.id);
  }

  function increment(info) {
    setPizzaCount(pizzaCount + 1);
    incrementPizzaCount(info);
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
            <Button className="add-to-cart" onClick={() => activatePizzaCounter(info)}>
              ADD TO CART
            </Button>
          ) : (
            <div className="counter">
              <Button
                className="decrement"
                aria-label="Decrease quantity"
                onClick={() => decrement(info)}
              >
                -
              </Button>
              <span>{pizzaCount}</span>
              <Button
                className="increment"
                aria-label="Increase quantity"
                onClick={() => increment(info)}
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
