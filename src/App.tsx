import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useEffect } from "react";
import NgtechnoApi from "utils/api/ngtechnoApi";

function App() {
  useEffect(() => {
    const ngtechnoApi = new NgtechnoApi();
    ngtechnoApi.request({
      url: "/ObterTempoCorredor",
      body: { idCorrida: 1, numeroCorredor: 5 },
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
