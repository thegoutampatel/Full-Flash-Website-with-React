import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Service from "./Pages/service/Service";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Navigate to="/" />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/service",
    element: <Service/>,
  },
]);

const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
      )
}

export default App