import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

test("renders all input fields and search button", () => {
  render(<SearchForm onSearch={() => {}} />);
  expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/author/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/genre \/ keyword/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
});

test("calls onSearch when form is submitted", () => {
  const mockSearch = jest.fn();
  render(<SearchForm onSearch={mockSearch} />);

  fireEvent.change(screen.getByPlaceholderText(/title/i), {
    target: { value: "React" },
  });
  fireEvent.click(screen.getByRole("button", { name: /search/i }));

  expect(mockSearch).toHaveBeenCalled();
});
