import Home from "../pages/Home";
import Error from "../pages/Error";

const routes = [
   {
      key: "home",
      path: "/",
      element: Home,
   },
   {
      key: "error",
      path: "*",
      element: Error,
   },

]

export default routes;