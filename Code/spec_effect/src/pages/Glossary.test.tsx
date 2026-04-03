import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Glossary from "./Glossary";

describe("Checking that certain elements are present.", () => {
    test("There is a type 2 header:", () => {
        render(
            <MemoryRouter>
                <Glossary />
            </MemoryRouter>,
        );
        const header2 = screen.getByRole("heading", { level: 2 });
        expect(header2).toBeInTheDocument();
    });

    test("Divider containing GlossaryText component is present:", () => {
        render(
            <MemoryRouter>
                <Glossary />
            </MemoryRouter>,
        );
        const glossDiv = screen.getByTestId('glossTextHere')
        expect(glossDiv).toBeInTheDocument();
    });

    test("Text within GlossaryText component is present:", () => {
        render(
            <MemoryRouter>
                <Glossary />
            </MemoryRouter>,
        );
        const glossWords = screen.getByText(/Table of Contents/i)
        expect(glossWords).toBeInTheDocument();
    });
});

test("Clicking a link updates the URL hash, scrolling down:", async () => {
    render(
        <MemoryRouter>
            <Glossary />
        </MemoryRouter>,
    );
    const cpuLink = screen.getByRole("link", { name: "CPU" });

    await userEvent.click(cpuLink);

    expect(cpuLink).toHaveAttribute("href", "#cpu");
});