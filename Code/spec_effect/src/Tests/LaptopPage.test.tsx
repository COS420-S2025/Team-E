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
    test("Checking for laptop name header", () => {
        renderLoginPage();
        const LaptopHeader = screen.getByRole("heading", { level: 2 });
        expect(LaptopHeader).toBeInTheDocument();
    });

    test("Divider containing contents is present:", () => {
        renderLoginPage();
        const laptopDiv = screen.getByTestId("laptop-items-here");
        expect(laptopDiv).toBeInTheDocument();
    });
});