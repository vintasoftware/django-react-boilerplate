import { render, screen, waitFor } from "@testing-library/react";

import { RestService } from "../../api";
import Home from "../Home";

jest.mock("../../api", () => ({
  RestService: {
    restRestCheckRetrieve: jest.fn(),
  },
}));

describe("Home", () => {
  beforeEach(() => {
    (RestService.restRestCheckRetrieve as jest.Mock).mockResolvedValue({
      message: "Test Result",
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders static assets and rest API data", async () => {
    render(<Home />);

    expect(screen.getByText("Static assets")).toBeInTheDocument();
    expect(screen.getByText("Rest API")).toBeInTheDocument();
    expect(await screen.findByText("Test Result")).toBeInTheDocument();
  });

  test("calls restRestCheckRetrieve on mount", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(RestService.restRestCheckRetrieve).toHaveBeenCalledWith();
    });
  });
});
