import React from "react";
import { render, screen } from "@testing-library/react";
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

// make a test that checks for existence of GlossaryText via a testID you make 
// make GlossaryText.test.tsx, and make a test that checks for when a link is clicked, a scroll happens