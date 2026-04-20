import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import LaptopPage from "../pages/LaptopPage";

function renderLoginPage() {
    render(
        <MemoryRouter>
            <LaptopPage />
        </MemoryRouter>,
    );
}

describe("The page has loaded visually:", () => {

    test("Divider containing contents is present:", () => {
        renderLoginPage();
        const laptopDiv = screen.getByTestId("laptop-items");
        expect(laptopDiv).toBeInTheDocument();
    });

    test("Text within GlossaryText component is present:", () => {
        renderLoginPage();
        const lapPageWords = screen.getByText(/Specs/i);
        expect(lapPageWords).toBeInTheDocument();
    });
});