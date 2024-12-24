import {createContext, useReducer} from "react";

export const PizzaContext = createContext(null);
PizzaContext.displayName = "PizzaContext";

function PizzaContextProvider({children}) {
    const initialState = {
        pizzaOrderList: [],
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT_PIZZA_COUNT":
                const pizzaForIncrement = state.pizzaOrderList.find(
                    (pizza) => pizza.id === action.payload.id
                );

                if (!pizzaForIncrement) {
                    action.payload.orderCount = 1;
                    state.pizzaOrderList.push(action.payload);
                    return {...state, pizzaOrderList: [...state.pizzaOrderList]};
                }

                pizzaForIncrement.orderCount = pizzaForIncrement.orderCount + 1;
                const updatedList = state.pizzaOrderList.map((pizza) =>
                    pizza.id === pizzaForIncrement.id ? pizzaForIncrement : pizza
                );
                return {...state, pizzaOrderList: [...updatedList]};

            case "DECREMENT_PIZZA_COUNT":
                const pizzaForDecrement = state.pizzaOrderList.find(
                    (pizza) => pizza.id === action.payload
                );

                if (!pizzaForDecrement) {
                    return state;
                }

                if (pizzaForDecrement.orderCount <= 1) {
                    const filteredList = state.pizzaOrderList.filter(
                        (pizza) => pizza.id !== action.payload
                    );
                    return {...state, pizzaOrderList: [...filteredList]};
                }

                pizzaForDecrement.orderCount = pizzaForDecrement.orderCount - 1;
                const newList = state.pizzaOrderList.map((pizza) =>
                    pizza.id === action.payload.id ? pizzaForDecrement : pizza
                );
                return {...state, pizzaOrderList: [...newList]};

            case "REMOVE_PIZZA_FROM_ORDER":
                const listWithoutPizza = state.pizzaOrderList.filter(
                    (pizza) => pizza.id !== action.payload
                );
                return {...state, pizzaOrderList: listWithoutPizza}

            case "REMOVE_ALL_PIZZAS":
                return {...state, pizzaOrderList: []}

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

    const value = {
        incrementPizzaCount,
        decrementPizzaCount,
        removePizza,
        removeAllPizzas,
        state,
    };

    return (
        <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
    );
}

export default PizzaContextProvider;
