import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

const renderWithRouter = (ui: React.ReactNode, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui),
  };
};

export default renderWithRouter;
