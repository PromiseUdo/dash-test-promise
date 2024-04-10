import React from "react";
import Button from "./common/button";
import Logo from "./common/logo";
import { RouterProvider } from "react-router-dom";
import RouteConfig from "./routes";
import { ReviewProvider } from "./context/ReviewContext";

function App() {
  return (
    <div className="">
      <ReviewProvider>
        <RouterProvider router={RouteConfig} />
      </ReviewProvider>
    </div>
  );
}

export default App;
