import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Button from "../../components/Button";
import "./order-form-page.css";
import Input from "../../components/Input";
import {useContext, useMemo, useState} from "react";
import {PizzaContext} from "../../contexts/PizzaContextProvider";
import useExtendedFetch from "../../hooks/useExtendedFetch";
import {calculateTotalPriceFor, getNewPreOrderPizzas, prepareReqBody, submitPizzaOrder} from "./orderHelper";
import {useNavigate} from "react-router-dom";

const schema = z.object({
    firstName: z.string(),
    phone: z.string().nonempty({message: "Phone is required"}).min(3).max(15),
    address: z.string().nonempty({message: "Address is required"}).min(3).max(30),
    priority: z.boolean(),
});

function OrderFormPage() {
    const [isSubmitOrderError, setIsSubmitOrderError] = useState(false);
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        reset,
        formState: {isValid, errors},
    } = useForm({
        mode: "onSubmit",
        defaultValues: {
            firstName: "vlad",
            phone: "",
            address: "",
            priority: false,
        },
        resolver: zodResolver(schema),
    });

    const {state: {preOrderPizzaList}, addSuccessfulOrderData} = useContext(PizzaContext);
    const newPreOrderPizzas = useMemo(() => getNewPreOrderPizzas(preOrderPizzaList), [preOrderPizzaList]);
    const totalPrice = useMemo(() => calculateTotalPriceFor(newPreOrderPizzas), [newPreOrderPizzas]);

    async function onSubmit(fromData) {
        event.preventDefault();
        console.log("Order Form Page data submited", fromData);

        const reqBody = prepareReqBody(newPreOrderPizzas, fromData);
        const respData = await submitPizzaOrder(reqBody);
        console.log("Order response data", respData);

        if (respData.status === "success") {
            reset();
            addSuccessfulOrderData(respData);
            navigate(`/orders/${respData.data.id}`);
        } else {
            setIsSubmitOrderError(true);
        }
    }

    return (
        <>
            <div className="order-p container">
                <h1>Ready to order? Let's go!</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Input
                            type="text"
                            id="firstName"
                            readOnly={true}
                            control={control}
                            regtype="firstName"
                            name="firstName"
                        />
                    </div>
                    <p className="error">
                        {errors.firstName && errors.firstName.message}
                    </p>

                    <div className="form-group">
                        <label htmlFor="phone">Phone number</label>
                        <Input
                            type="tel"
                            id="phone"
                            control={control}
                            regtype="phone"
                            name="phone"
                        />
                    </div>
                    <p className="error">{errors.phone && errors.phone.message}</p>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <div className="input-wrapper">
                            <Input
                                type="text"
                                id="address"
                                control={control}
                                regtype="address"
                                name="address"
                            />
                        </div>
                    </div>
                    <p className="error">{errors.address && errors.address.message}</p>

                    <div className="checkbox-group">
                        <div className="checkbox-wrapper">
                            <Input
                                type="checkbox"
                                id="priority"
                                control={control}
                                regtype="priority"
                                name="priority"
                            />
                            <label htmlFor="priority">
                                Want to give your order priority?
                            </label>
                        </div>
                    </div>
                    <p className="error">{errors.priority && errors.priority.message}</p>

                    <Button type="submit" className="order-btn">
                        Order now for €{totalPrice}
                    </Button>
                </form>

                <br/>
                {isSubmitOrderError && <p className="error">Something went wrong</p>}
            </div>
        </>
    );
}

export default OrderFormPage;
