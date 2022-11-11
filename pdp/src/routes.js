import React from "react";

// const PDPContent = React.lazy(() => import("./PDPContent"));
import PDPContent from "./PDPContent";

const routes = [
  {
    path: "/:id",
    element: <PDPContent />,
  },
];

export default routes;
