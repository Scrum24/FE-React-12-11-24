import {useParams} from "react-router";
import PriceItem from "./PriceItem";
import "./order-status-page.css";
import {useContext} from "react";
import {PizzaContext} from "../../contexts/PizzaContextProvider";
import {formatDate, minutesLeft} from "./orderStatusHelper";
import {convertIngredientsToStr} from "../PizzaMenu/pizzaMenuItemHelper";


function OrderStatusPage() {
    const {id} = useParams();
    const {state} = useContext(PizzaContext);
    const orderInfo = state.successfulOrders.find(order => order.data.id === id);

    const estimatedDeliveryDate = formatDate(orderInfo.data.estimatedDelivery);
    const leftMinutes = minutesLeft(orderInfo.data.createdAt)

    function getIngredientsStr(pizzaId){
        const pizzaOrder = state.preOrderPizzaList.find(pizza => pizza.id === pizzaId)
        return convertIngredientsToStr(pizzaOrder.ingredients);
    }

    return (
        <>
            <div className="order-status container">
                <div className="header">
                    <h1 className="order-title">Order {orderInfo.data.id} status: {orderInfo.data.status}</h1>
                    <div className="badges">
                        <span className="badge badge-priority">PRIORITY</span>
                        <span className="badge badge-preparing">PREPARING ORDER</span>
                    </div>
                </div>

                <div className="time-banner">
                    <div className="time-left">Only {leftMinutes} minutes left 😃</div>
                    <div className="estimated-time">
                        (Estimated delivery: {estimatedDeliveryDate})
                    </div>
                </div>

                {orderInfo.data.cart.map(pizza => {
                    return <div className="order-details" key={pizza.pizzaId}>
                        <div className="pizza-item">
                            <div className="pizza-header">
                                <span className="pizza-name">{pizza.quantity}× {pizza.name}</span>
                                <span className="pizza-price">€{pizza.totalPrice}</span>
                            </div>
                            <div className="ingredients">{getIngredientsStr(pizza.pizzaId)}</div>
                        </div>
                    </div>
                })}


                <div className="price-breakdown">
                    <PriceItem priceLabel="Price pizza" priceValue={orderInfo.data.orderPrice}/>
                    <PriceItem priceLabel="Price priority" priceValue={orderInfo.data.priorityPrice}/>
                    <PriceItem priceLabel="To pay on delivery" priceValue={orderInfo.data.orderPrice}/>
                </div>

                <div className="page-id">Page (order) id: {id}</div>
            </div>
        </>
    )
        ;
}

export default OrderStatusPage;
