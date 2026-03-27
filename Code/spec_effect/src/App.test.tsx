import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { renderFullApp } from "./TestRenderFullApp";

test("renders learn react link", () => {
    renderFullApp()
    const linkElement = screen.getByText(/SpecEffect/i);
    expect(linkElement).toBeInTheDocument();
});

describe("Some HTML Elements are added.", () => {
    test("There is a heading", () => {
        renderFullApp()
        const header = screen.getAllByRole("heading");
        expect(header[0]).toBeInTheDocument();
    });

    test("There is an image", () => {
        renderFullApp()
        const image = screen.getByRole("presentation");
        expect(image).toBeInTheDocument();
    });

    test("There is a checkbox", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        const box = screen.getByRole("checkbox");
        expect(box).toBeInTheDocument();
    });
});
