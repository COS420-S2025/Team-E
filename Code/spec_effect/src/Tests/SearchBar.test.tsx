import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../Component/SearchBar";

describe("SearchBar", () => {
    /** make sure we have the right starting input before anything is written */
    test("renders the search input with correct placeholder", () => {
        const onSearch = jest.fn();
        render(<SearchBar onSearch={onSearch} />);

        const input = screen.getByPlaceholderText(
            /Search for laptop based on your needs/i,
        );
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "text");
    });

    /** makes sure that the search start empty and fills as you type */
    test("starts with empty input and updates value when user types", () => {
        const onSearch = jest.fn();
        render(<SearchBar onSearch={onSearch} />);

        const input = screen.getByPlaceholderText(
            /Search for laptop based on your needs/i,
        );
        expect(input).toHaveValue("");

        fireEvent.change(input, { target: { value: "light laptop" } });
        expect(input).toHaveValue("light laptop");
    });

    /** makes sure the onSearch function is called each time it is ran */
    test("calls onSearch callback after each input change", () => {
        const onSearch = jest.fn();
        render(<SearchBar onSearch={onSearch} />);

        const input = screen.getByPlaceholderText(
            /Search for laptop based on your needs/i,
        );

        fireEvent.change(input, { target: { value: "gaming laptop" } });
        fireEvent.change(input, { target: { value: "ultrabook" } });

        expect(onSearch).toHaveBeenCalledTimes(2);
        expect(onSearch).toHaveBeenNthCalledWith(1, "gaming laptop");
        expect(onSearch).toHaveBeenNthCalledWith(2, "ultrabook");
    });
});
