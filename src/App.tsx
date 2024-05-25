import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import RunnerProvider from "./context/provider/runnerProvider";

function App() {
  return (
    <RunnerProvider>
      <RouterProvider router={router} />
    </RunnerProvider>
  );
}

export default App;
