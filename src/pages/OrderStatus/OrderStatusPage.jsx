import {useParams} from "react-router";
import PriceItem from "./PriceItem";
import "./order-status-page.css";

function OrderStatusPage() {
  const {id} = useParams();

  return (
    <>
      <div className="order-status container">
        <div className="header">
          <h1 className="order-title">Order #5T460L status: preparing</h1>
          <div className="badges">
            <span className="badge badge-priority">PRIORITY</span>
            <span className="badge badge-preparing">PREPARING ORDER</span>
          </div>
        </div>

        <div className="time-banner">
          <div className="time-left">Only 49 minutes left 😃</div>
          <div className="estimated-time">
            (Estimated delivery: Dec 12, 01:37 PM)
          </div>
        </div>

        <div className="order-details">
          <div className="pizza-item">
            <div className="pizza-header">
              <span className="pizza-name">1× Margherita</span>
              <span className="pizza-price">€12.00</span>
            </div>
            <div className="ingredients">Tomato, Mozzarella, Basil</div>
          </div>
        </div>

        <div className="price-breakdown">
          <PriceItem priceLabel="Price pizza" priceValue={12.0} />
          <PriceItem priceLabel="Price priority" priceValue={2.0} />
          <PriceItem priceLabel="To pay on delivery" priceValue={14.0} />
        </div>

        <div className="page-id">Page (order) id: {id}</div>
      </div>
    </>
  );
}

export default OrderStatusPage;
