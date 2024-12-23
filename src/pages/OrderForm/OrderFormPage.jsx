import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Button from "../../components/Button";
import "./order-form-page.css";
import Input from "../../components/Input";

const schema = z.object({
  firstName: z.string(),
  phone: z.string().nonempty({message: "Phone is required"}).min(3).max(15),
  address: z.string().nonempty({message: "Address is required"}).min(3).max(30),
  priority: z.boolean(),
});

function OrderFormPage() {
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

  const onSubmit = (data) => {
    event.preventDefault();
    console.log("Order Form Page data submited", data);

    reset();
  };

  let errorBlock = null;
  if (errors.firstName || errors.phone || errors.address || errors.priority) {
    errorBlock = (
      <div className="error">
        Errors:
        {errors.firstName && <p>{errors.firstName.message}</p>}
        {errors.phone && <p>{errors.phone.message}</p>}
        {errors.address && <p>{errors.address.message}</p>}
        {errors.priority && <p>{errors.priority.message}</p>}
      </div>
    );
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

          <Button type="submit" className="order-btn">
            Order now for €12.00
          </Button>
        </form>

        <br />
        {errorBlock}
      </div>
    </>
  );
}

export default OrderFormPage;
