import axios from "axios";
import {pizzas} from "../PizzaMenu/pizzas";

export const getNewPreOrderPizzas = (preOrderPizzaList) => {
  return preOrderPizzaList.filter(pizzas => pizzas.ordered === undefined || pizzas.ordered === false )
}

export const calculateTotalPriceFor = (preOrderPizzaList) => {
  return preOrderPizzaList.reduce(
      (sum, pizzaOrder) => sum + pizzaOrder.orderCount * pizzaOrder.unitPrice,
      0
  );
}

export const prepareReqBody = (preOrderPizzaList, fromData) => {
  const pizzasOrder = preOrderPizzaList.map((pizza) => {
    return {
      name: pizza.name,
      pizzaId: pizza.id,
      quantity: pizza.orderCount,
      totalPrice: pizza.orderCount * pizza.unitPrice,
      unitPrice: pizza.unitPrice,
    };
  });

  const totalPizzasPrice = pizzasOrder.reduce((sum, pizzaOrder) => sum + pizzaOrder.totalPrice, 0);
  const reqBody = {
    address: fromData.address,
    customer: fromData.firstName,
    phone: fromData.phone,
    priority: fromData.priority,
    position: "",
    cart: pizzasOrder,
    totalPrice: totalPizzasPrice,
  };

  return reqBody;
}


export const submitPizzaOrder = async (reqBody) => {
  try {
    const response = await axios.post(
      "https://react-fast-pizza-api.onrender.com/api/order",
      reqBody
    );

    if (response.status !== 201) {
      throw new Error(response.message);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return {status: "fail", message: error.message};
  }
};
