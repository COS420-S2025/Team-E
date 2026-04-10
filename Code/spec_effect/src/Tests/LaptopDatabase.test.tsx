import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LaptopDatabase from "../pages/LaptopDatabase";

describe("LaptopDatabase", () => {
    test("renders the Laptop Database heading", () => {
        render(
            <MemoryRouter>
                <LaptopDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByRole("heading", { name: /Laptop Database/i })).toBeInTheDocument();
    });

    test("renders the Add to Laptop Database button", () => {
        render(
            <MemoryRouter>
                <LaptopDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByRole("button", { name: /Add to Laptop Database/i })).toBeInTheDocument();
    });

    test("renders laptop items", () => {
        render(
            <MemoryRouter>
                <LaptopDatabase />
            </MemoryRouter>,
        );
        expect(screen.getByText("Dell XPS 13")).toBeInTheDocument();
        expect(screen.getByText("MacBook Pro")).toBeInTheDocument();
        expect(screen.getByText("HP Pavilion")).toBeInTheDocument();
        expect(screen.getByText("Lenovo ThinkPad")).toBeInTheDocument();
    });

    test("renders Remove buttons", () => {
        render(
            <MemoryRouter>
                <LaptopDatabase />
            </MemoryRouter>,
        );
        const removeButtons = screen.getAllByRole("button", { name: /Remove/i });
        expect(removeButtons.length).toBeGreaterThanOrEqual(4);
    });
});
