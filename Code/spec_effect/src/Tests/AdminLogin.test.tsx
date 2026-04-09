import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderFullApp } from "../TestRenderFullApp";
import exp from "constants";
import userEvent from "@testing-library/user-event";
import AdminLogin from "../pages/AdminLogin";

function renderLoginPage() {
    render(
        <MemoryRouter>
            <AdminLogin />
        </MemoryRouter>,
    );
}

describe("The page is visually loaded.", () => {
    test("Check for login widget", () => {
        renderLoginPage();
        const loginWidget = screen.getByText(/Admin Login Page/i);
        expect(loginWidget).toBeInTheDocument();
    });

    test("An input field is present", () => {
        renderLoginPage();
        const emailInp = screen.getByLabelText(/Email:/i);
        expect(emailInp).toBeInTheDocument();
    });

    test("A password field is present", () => {
        renderLoginPage();
        const passInp = screen.getByLabelText(/Password:/i);
        expect(passInp).toBeInTheDocument();
    });

    test("Login button is present", () => {
        renderLoginPage();
        const loginButton = screen.getByRole("button", { name: /Login/i });
        expect(loginButton).toBeInTheDocument();
    });
});
