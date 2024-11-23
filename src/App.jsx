import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PizzaMenuPage from "./pages/PizzaMenuPage";

const BASE_URL = "/FE-React-12-11-24";

function App() {
  return (
    <>
      <Routes>
        <Route path={`${BASE_URL}/`} element={<HomePage />} />
        <Route path={`${BASE_URL}/pizza-menu`} element={<PizzaMenuPage />} />
      </Routes>
    </>
  );
}

export default App;
