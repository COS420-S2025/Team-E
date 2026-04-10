import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddToGlossaryDatabase from "../pages/AddToGlossaryDatabase";

describe("AddToGlossaryDatabase", () => {
    test("renders the Add to Glossary Database heading", () => {
        render(
            <MemoryRouter>
                <AddToGlossaryDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByRole("heading", { name: /Add to Glossary Database/i })).toBeInTheDocument();
    });

    test("renders the Term input field", () => {
        render(
            <MemoryRouter>
                <AddToGlossaryDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByLabelText(/Term/i)).toBeInTheDocument();
    });

    test("renders the Definition input field", () => {
        render(
            <MemoryRouter>
                <AddToGlossaryDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByLabelText(/Definition/i)).toBeInTheDocument();
    });

    test("renders the Add Term button", () => {
        render(
            <MemoryRouter>
                <AddToGlossaryDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByRole("button", { name: /Add Term/i })).toBeInTheDocument();
    });
});
