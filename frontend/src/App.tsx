import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./app/home/pages/Landing";
import RestaurantRegistrationPage from "./app/restaurant_registration/pages/restaurant_registration";
import RestaurantProfilePage from "./app/restaurant_registration/pages/restaurant_profile";
import { HomePage } from './app/Shopping_cart/pages/HomePage/index';

const router = createBrowserRouter([
  {
    path: "*",
    Component: HomePage,
  },
  {
    path: "/restaurant/register",
    Component: RestaurantRegistrationPage,
  },
  {
    path: "/restaurant/profile",
    Component: RestaurantProfilePage,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
