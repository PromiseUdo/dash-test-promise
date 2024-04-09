/* eslint-disable react-hooks/exhaustive-deps */

import HomePage from "../pages/home-page";
import HomePageLayout from "../layouts/homepageLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import AllReviewsLayout from "@/layouts/allReviewsLayout";
import AllReviewsPage from "@/pages/all-reviews";

const RouteConfig = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>App crash</div>}>
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/all-reviews" element={<AllReviewsLayout />}>
        <Route index element={<AllReviewsPage />} />
      </Route>
    </Route>
  )
);

export default RouteConfig;
