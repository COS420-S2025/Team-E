import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GlossaryDatabase from "../pages/GlossaryEditor";

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
});
