import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // Root Route
  {
    path: "/",
    element: <div>Homepage</div>,
    errorElement: <div>Error</div>,
  },
  // Classification Route
  {
    path: "/classificacoes",
    element: <div>Classificações</div>,
  },
  // Ranking Route
  {
    path: "/ranking",
    element: <div>Ranking</div>,
  },
]);

export default router;
