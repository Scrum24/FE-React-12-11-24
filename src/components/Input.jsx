import {useController} from "react-hook-form";

function Input(props) {
  const {name, control, type} = props;

  if (name && control) {
    const {field} = useController({name, control});
    return <input type={type} {...field} />;
  }

  return <input {...props} />;
}
export default Input;
