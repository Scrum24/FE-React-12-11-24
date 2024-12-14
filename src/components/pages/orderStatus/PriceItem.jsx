import "./order-status-page.css";

function PriceItem(props) {
  const {priceLabel, priceValue} = props;

  return (
    <>
      <div className="price-item">
        <span className="price-label">{priceLabel}:</span>
        <span className="price-value">€{priceValue}</span>
      </div>
    </>
  );
}

export default PriceItem;
