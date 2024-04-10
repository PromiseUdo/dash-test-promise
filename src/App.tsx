import React from "react";
import Button from "./common/button";
import Logo from "./common/logo";
import { RouterProvider } from "react-router-dom";
import RouteConfig from "./routes";
import { ReviewProvider } from "./context/ReviewContext";
import { ReviewsListProvider } from "./context/ReviewsListContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(51,65,85)",
            color: "#f7f7f7",
          },
        }}
      />
      <ReviewsListProvider>
        <ReviewProvider>
          <RouterProvider router={RouteConfig} />
        </ReviewProvider>
      </ReviewsListProvider>
    </div>
  );
}

export default App;
