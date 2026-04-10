import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GlossaryDatabase from "../pages/GlossaryDatabase";

describe("GlossaryDatabase", () => {
    test("renders the Glossary Database heading", () => {
        render(
            <MemoryRouter>
                <GlossaryDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByRole("heading", { name: /Glossary Database/i })).toBeInTheDocument();
    });

    test("renders the Add to Glossary button", () => {
        render(
            <MemoryRouter>
                <GlossaryDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByRole("button", { name: /Add to Glossary/i })).toBeInTheDocument();
    });

    test("renders glossary items", () => {
        render(
            <MemoryRouter>
                <GlossaryDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByText("cpu")).toBeInTheDocument();
        expect(screen.getByText("gpu")).toBeInTheDocument();
    });

    test("renders Remove buttons", () => {
        render(
            <MemoryRouter>
                <GlossaryDatabase />
            </MemoryRouter>,
        );
        const removeButtons = screen.getAllByRole("button", { name: /Remove/i });
        expect(removeButtons.length).toBeGreaterThanOrEqual(2);
    });
});
