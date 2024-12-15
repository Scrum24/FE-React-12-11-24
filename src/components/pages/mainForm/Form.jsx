import React, {useContext, useState} from "react";
import Input from "./Input";
import Button from "./../../Button";
import {useNavigate} from "react-router-dom";
import {UserInfoContext} from "../../../contexts/UserInfoContextProvider";

function Form() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const {updateContextUserName} = useContext(UserInfoContext);

  function updateUserName(e) {
    setUserName(e.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    updateContextUserName(userName);
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
