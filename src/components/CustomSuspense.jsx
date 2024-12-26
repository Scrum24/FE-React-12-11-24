import {Suspense} from "react";

function CustomSuspense({children}) {
  return <Suspense fallback={<h1>Loading ... </h1>}>{children}</Suspense>;
}

export default CustomSuspense;
