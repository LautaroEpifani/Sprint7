import { createBrowserRouter } from "react-router-dom";
import Services from "../components/Services/Services";
import Landing from "../components/Landing/Landing";
import NotFound from "../components/NotFound/NotFound";
import LayoutPublic from "../layout/LayoutPublic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      {
        path: "/services",
        element: <Services/>

      },
      
    ],
  },
]);
