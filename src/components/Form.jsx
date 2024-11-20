import Input from "./Input";
import Button from "./Button";

function Form() {
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <p className="welcome">
        👉 Welcome! Please start by telling us your name:
      </p>

      <Input />
      <Button />
    </form>
  );
}

export default Form;
