import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";


const routes = (user: any) =>
  createBrowserRouter([
    {
      path: "/",
      element:  <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
      ],
    },
  ]);
export default routes;
