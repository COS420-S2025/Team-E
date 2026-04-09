import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderFullApp } from "../TestRenderFullApp";
import exp from "constants";
import userEvent from "@testing-library/user-event";
import AdminLogin from "../pages/AdminLogin";

describe("The page is visually loaded.", () => {
    test("Check for login widget", () => {
        renderFullApp();
        const loginWidget = screen.getByText(/Admin Panel Login/i);
        expect(loginWidget).toBeInTheDocument();
    });

    test("An input field is present", () => {
        renderFullApp();
        const emailInp = screen.getByLabelText(/Email/i);
        expect(emailInp).toBeInTheDocument();
    });

    test("A password field is present", () => {
        renderFullApp();
        const passInp = screen.getByLabelText(/Password/i);
        expect(passInp).toBeInTheDocument();
    });

    test("Login button is present", () => {
        renderFullApp();
        const loginButton = screen.getByRole("button", { name: /Login/i });
        expect(loginButton).toBeInTheDocument();
    });
});
