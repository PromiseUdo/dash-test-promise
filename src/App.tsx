import React from "react";
import Button from "./common/button";
import Logo from "./common/logo";
import { RouterProvider } from "react-router-dom";
import RouteConfig from "./routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={RouteConfig} />
    </div>
  );
}

export default App;
