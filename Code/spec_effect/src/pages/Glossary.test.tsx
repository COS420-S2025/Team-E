import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Glossary from "./Glossary";

test("renders learn react link", () => {
    render(
        <MemoryRouter>
            <Glossary />
        </MemoryRouter>,
    );
    const linkElement = screen.getByText(/SpecEffect/i);
    expect(linkElement).toBeInTheDocument();
});

describe("Some HTML Elements are added.", () => {
    test("There is a type 3 header", () => {
        render(
            <MemoryRouter>
                <Glossary />
            </MemoryRouter>,
        );
        const header3 = screen.getAllByRole("heading", { level: 3 });
        expect(header3).toBeInTheDocument();
    });

    test("There is an image", () => {
        render(
            <MemoryRouter>
                <Glossary />
            </MemoryRouter>,
        );
        const image = screen.getByRole("presentation");
        expect(image).toBeInTheDocument();
    });
});