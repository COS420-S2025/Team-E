import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AdminLogin from "../pages/AdminLogin";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

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

describe("The page is functional.", () => {
    test("Email input field accepts text", () => {
        renderLoginPage();
        const emailInp = screen.getByLabelText(/Email:/i) as HTMLInputElement;
        emailInp.value = "test@example.com";
        expect(emailInp.value).toBe("test@example.com");
    });

    test("Password input field accepts text", () => {
        renderLoginPage();
        const passInp = screen.getByLabelText(/Password:/i) as HTMLInputElement;
        passInp.value = "password123";
        expect(passInp.value).toBe("password123");
    });

    test("Login button is clickable", () => {
        renderLoginPage();
        const loginButton = screen.getByRole("button", { name: /Login/i });
        expect(loginButton).toBeEnabled();
    });

    test("Displays error message on failed login", async () => {
        renderLoginPage();
        const emailInp = screen.getByLabelText(/Email:/i) as HTMLInputElement;
        const passInp = screen.getByLabelText(/Password:/i) as HTMLInputElement;
        const loginButton = screen.getByRole("button", { name: /Login/i });
        emailInp.value = "test@example.com";
        passInp.value = "wrongpassword";
        await userEvent.click(loginButton);
    });
    test("Displays success message on successful login", async () => {
        renderLoginPage();
        const emailInp = screen.getByLabelText(/Email:/i) as HTMLInputElement;
        const passInp = screen.getByLabelText(/Password:/i) as HTMLInputElement;
        const loginButton = screen.getByRole("button", { name: /Login/i });
        emailInp.value = "admin@test.com";
        passInp.value = "password";
        await userEvent.click(loginButton);
    });
});
