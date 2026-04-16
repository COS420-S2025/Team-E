import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ChooseDatabase from "../pages/ChooseEditor";

describe("ChooseDatabase", () => {
    test("renders the Choose a Database heading", () => {
        render(
            <MemoryRouter>
                <ChooseDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByRole("heading", { name: /Choose a Database/i })).toBeInTheDocument();
    });

    test("renders the introductory text", () => {
        render(
            <MemoryRouter>
                <ChooseDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByText(/Select which database you would like to explore/i)).toBeInTheDocument();
    });

    test("renders both database buttons", () => {
        render(
            <MemoryRouter>
                <ChooseDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByRole("button", { name: /Glossary Database/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Laptop Database/i })).toBeInTheDocument();
    });

    test("renders database descriptions", () => {
        render(
            <MemoryRouter>
                <ChooseDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByText(/Browse glossary terms and definitions/i)).toBeInTheDocument();
        expect(screen.getByText(/Browse laptop specifications and details/i)).toBeInTheDocument();
    });
});
