import Button from "./Button.jsx";

function PizzaMenuItem(props) {
  const {info} = props;
  const {imageUrl, name, unitPrice, ingredients, soldOut} = info;
  const ingredientsStr = convertToStr(ingredients);

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

      {!soldOut && <Button className="add-to-cart">ADD TO CART</Button>}
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
