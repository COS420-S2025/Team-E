import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../Component/SearchBar";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
  test("renders the search input with correct placeholder", () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(
      /Search/i,
    );
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "search");
  });

  test("starts with empty input and updates value when user types", () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(
      /Search/i,
    );
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "light laptop" } });
    expect(input).toHaveValue("light laptop");
    expect(onSearch).not.toHaveBeenCalled();
  });

  test("calls onSearch when Search button is clicked", () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(
      /Search/i,
    );
    fireEvent.change(input, { target: { value: "gaming laptop" } });

    fireEvent.click(screen.getByRole("button", { name: /Search/i }));

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("gaming laptop");
  });

  test("calls onSearch when Enter is pressed in the form", async () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(/Search/i,);
    
    await userEvent.type(input, "ultrabook{enter}");

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("ultrabook");
  });
});
