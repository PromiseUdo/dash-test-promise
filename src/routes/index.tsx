/* eslint-disable react-hooks/exhaustive-deps */

import HomePage from "../pages/home-page";
import HomePageLayout from "../layouts/homepageLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

const RouteConfig = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>App crash</div>}>
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Route>
  )
);

export default RouteConfig;
