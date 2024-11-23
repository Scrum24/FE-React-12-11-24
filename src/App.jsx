import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PizzaMenuPage from "./pages/PizzaMenuPage";
import "./css/main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza-menu" element={<PizzaMenuPage />} />
      </Routes>
    </>
  );
}

export default App;
