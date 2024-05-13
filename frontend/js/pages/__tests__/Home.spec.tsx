import { render, screen, waitFor } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRestCheck } from "../../store/rest_check";
import Home from "../Home";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../store/rest_check", () => ({
  fetchRestCheck: jest.fn(),
}));

describe("Home", () => {
  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(jest.fn());
    (useSelector as jest.Mock).mockReturnValue({
      data: { payload: { result: "Test Result" } },
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

  test("dispatches fetchRestCheck action on mount", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(fetchRestCheck).toHaveBeenCalledWith();
    });
  });
});
