import OrderFormInput from "./OrderFormInput";
import Button from "./../../Button";
import "./order-form-page.css";

function OrderFormPage() {
  function onSubmit(event) {
    event.preventDefault();
    console.log("Order Form Page data submited");
  }

  return (
    <>
      <div className="order-p container">
        <h1>Ready to order? Let's go!</h1>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <OrderFormInput
              type="text"
              id="firstName"
              defaultValue="vlad"
              readOnly={true}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <OrderFormInput type="tel" id="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <div className="input-wrapper">
              <OrderFormInput type="text" id="address" required />
            </div>
          </div>

          <div className="checkbox-group">
            <div className="checkbox-wrapper">
              <OrderFormInput type="checkbox" id="priority" />
              <label htmlFor="priority">
                Want to give your order priority?
              </label>
            </div>
          </div>

          <Button type="submit" className="order-btn">
            Order now for €12.00
          </Button>
        </form>
      </div>
    </>
  );
}

export default OrderFormPage;
