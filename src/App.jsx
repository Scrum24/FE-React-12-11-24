import {Routes, Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import "./main.css";
import CustomSuspense from "./components/CustomSuspense";

const HomePageLazy = lazy(() => import("./pages/MainForm/HomePage"));
const PizzaMenuPageLazy = lazy(() => import("./pages/PizzaMenu/PizzaMenuPage"));
const CartListPageLazy = lazy(() => import("./pages/Cart/CartListPage"));
const NotFoundPageLazy = lazy(() => import("./pages/NotFound/NotFoundPage"));
const OrderFormPageLazy = lazy(() => import("./pages/OrderForm/OrderFormPage"));
const OrderStatusPageLazy = lazy(() =>
  import("./pages/OrderStatus/OrderStatusPage")
);

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CustomSuspense>
              <HomePageLazy />
            </CustomSuspense>
          }
        />
        <Route
          path="/pizza-menu"
          element={
            <CustomSuspense>
              <PizzaMenuPageLazy />
            </CustomSuspense>
          }
        />
        <Route
          path="/cart-list"
          element={
            <CustomSuspense>
              <CartListPageLazy />
            </CustomSuspense>
          }
        />
        <Route
          path="/order-form"
          element={
            <CustomSuspense>
              <OrderFormPageLazy />
            </CustomSuspense>
          }
        />
        <Route
          path="/orders/:id"
          element={
            <CustomSuspense>
              <OrderStatusPageLazy />
            </CustomSuspense>
          }
        />
        <Route
          path="*"
          element={
            <CustomSuspense>
              <NotFoundPageLazy />
            </CustomSuspense>
          }
        />
      </Routes>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <CustomSuspense>
//         <Routes>
//           <Route path="/" element={<HomePageLazy />} />
//           <Route path="/pizza-menu" element={<PizzaMenuPageLazy />} />
//           <Route path="/cart-list" element={<CartListPageLazy />} />
//           <Route path="/order-form" element={<OrderFormPageLazy />} />
//           <Route path="/orders/:id" element={<OrderStatusPageLazy />} />
//           <Route path="*" element={<NotFoundPageLazy />} />
//         </Routes>
//       </CustomSuspense>
//     </>
//   );
// }

export default App;
