import { createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import Ranking from "pages/Ranking";

const router = createBrowserRouter([
  // Root Route
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  // Classification Route
  {
    path: "/classificacoes",
    element: <Ranking />,
  },
]);

export default router;
