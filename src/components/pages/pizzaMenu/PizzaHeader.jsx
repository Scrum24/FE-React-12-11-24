import Navigation from "../../navigation/Navigation";
import "./pizza-header.css";

function PizzaHeader() {
  return (
    <header>
      <div>
        <div className="logo">PIZZA DAY</div>
        <Navigation />
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search for the order #"
      />
      <div className="username">VLAD</div>
    </header>
  );
}

export default PizzaHeader;
