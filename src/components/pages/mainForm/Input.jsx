function Input(props) {
  const {value, onChange} = props;

  return (
    <input
      type="text"
      placeholder="Your full name"
      aria-label="Your full name"
      value={value}
      onChange={onChange}
    />
  );
}
export default Input;
