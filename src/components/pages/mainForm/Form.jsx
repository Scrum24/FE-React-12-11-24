import Input from "./../../Input";
import Button from "./../../Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  function updateUserName(e) {
    setUserName(e.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(userName);

    navigate("/pizza-menu");
  }

  return (
    <form onSubmit={onSubmit}>
      <p className="welcome">
        👉 Welcome! Please start by telling us your name:
      </p>
      <Input value={userName} onChange={updateUserName} />
      <Button className="btn">Start Order</Button>
    </form>
  );
}
export default Form;
