import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";



describe("Some HTML Elements are added.", () => {
    test("renders learn react link", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    );
    const linkElement = screen.getByText(/SpecEffect/i);
    expect(linkElement).toBeInTheDocument();
    });

    test("There is a heading", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        const header = screen.getAllByRole("heading");
        expect(header[0]).toBeInTheDocument();
    });

    test("There is an image", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        const image = screen.getByRole("presentation");
        expect(image).toBeInTheDocument();
    });
});
