import {createContext, useReducer} from "react";

export const PizzaContext = createContext(null);
PizzaContext.displayName = "PizzaContext";

function PizzaContextProvider({children}) {
    const initialState = {
        preOrderPizzaList: [],
        successfulOrders: []
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT_PIZZA_COUNT":
                const pizzaForIncrement = state.preOrderPizzaList.find(
                    (pizza) => pizza.id === action.payload.id
                );

                if (!pizzaForIncrement) {
                    action.payload.orderCount = 1;
                    state.preOrderPizzaList.push(action.payload);
                    return {...state, preOrderPizzaList: [...state.preOrderPizzaList]};
                }

                pizzaForIncrement.orderCount = pizzaForIncrement.orderCount + 1;
                const updatedList = state.preOrderPizzaList.map((pizza) =>
                    pizza.id === pizzaForIncrement.id ? pizzaForIncrement : pizza
                );
                return {...state, preOrderPizzaList: [...updatedList]};

            case "DECREMENT_PIZZA_COUNT":
                const pizzaForDecrement = state.preOrderPizzaList.find(
                    (pizza) => pizza.id === action.payload
                );

                if (!pizzaForDecrement) {
                    return state;
                }

                if (pizzaForDecrement.orderCount <= 1) {
                    const filteredList = state.preOrderPizzaList.filter(
                        (pizza) => pizza.id !== action.payload
                    );
                    return {...state, preOrderPizzaList: [...filteredList]};
                }

                pizzaForDecrement.orderCount = pizzaForDecrement.orderCount - 1;
                const newList = state.preOrderPizzaList.map((pizza) =>
                    pizza.id === action.payload.id ? pizzaForDecrement : pizza
                );
                return {...state, preOrderPizzaList: [...newList]};

            case "REMOVE_PIZZA_FROM_ORDER":
                const listWithoutPizza = state.preOrderPizzaList.filter(
                    (pizza) => pizza.id !== action.payload
                );
                return {...state, preOrderPizzaList: listWithoutPizza}

            case "REMOVE_ALL_PIZZAS":
                return {...state, preOrderPizzaList: []}

            case "ADD_SUCCESSFUL_ORDER":
                state.successfulOrders.push(action.payload);

                for (const currentCart of action.payload.data.cart) {
                    state.preOrderPizzaList.forEach(preOrderPizza => {
                            if (preOrderPizza.id === currentCart.pizzaId) {
                                preOrderPizza.ordered = true;
                            }
                    })
                }
                return {...state, successfulOrders: [...state.successfulOrders]}

            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const incrementPizzaCount = (pizza) => {
        dispatch({
            type: "INCREMENT_PIZZA_COUNT",
            payload: pizza,
        });
    };

    const decrementPizzaCount = (pizzaId) => {
        dispatch({
            type: "DECREMENT_PIZZA_COUNT",
            payload: pizzaId,
        });
    };

    const removePizza = (pizzaId) => {
        dispatch({
            type: "REMOVE_PIZZA_FROM_ORDER",
            payload: pizzaId,
        });
    };

    const removeAllPizzas = () => {
        dispatch({
            type: "REMOVE_ALL_PIZZAS"
        });
    };

    const addSuccessfulOrderData = (successfulOrderData) => {
        dispatch({
            type: "ADD_SUCCESSFUL_ORDER",
            payload: successfulOrderData
        });
    };

    const value = {
        incrementPizzaCount,
        decrementPizzaCount,
        removePizza,
        removeAllPizzas,
        addSuccessfulOrderData,
        state,
    };

    return (
        <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
    );
}

export default PizzaContextProvider;
