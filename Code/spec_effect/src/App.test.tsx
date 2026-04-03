import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { renderFullApp } from "./TestRenderFullApp";
import exp from "constants";
import userEvent from "@testing-library/user-event";



describe("Some HTML Elements are added.", () => {
    test("renders learn react link", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    );
    const linkElement = screen.getByText(/SpecEffect/i);
    expect(linkElement).toBeInTheDocument();
    });

    test("There is a heading", () => {
        renderFullApp();
        const header = screen.getAllByRole("heading");
        expect(header[0]).toBeInTheDocument();
    });

    test("There is an image", () => {
        renderFullApp();
        const image = screen.getByRole("presentation");
        expect(image).toBeInTheDocument();
    });

    test("There is a column for filters", () => {
        renderFullApp();
        const filterColumn = screen.getByText(/Filter/i);
        expect(filterColumn).toBeInTheDocument();
    });

    test("There is a section for the search bar", () => {
        renderFullApp();
        const searchDiv = screen.getByTestId("searchBarDiv");
        expect(searchDiv).toBeInTheDocument();
    });

    test("There is a catalogDiv", () => {
        renderFullApp();
        const catalogDiv = screen.getByTestId("catalogDiv");
        expect(catalogDiv).toBeInTheDocument();
    });
});

describe("Basic page navigation works", () => {
    test("Clicking home doesn't change page.", async () => {
        renderFullApp();
        const homeButton = screen.getByRole("button", { name: /Home/i });
        await userEvent.click(homeButton);
        const homeMes = screen.getByText(/Home Page/i);
        expect(homeMes).toBeInTheDocument();
    });

    test("Clicking Glossary changes to glossary page.", async () => {
        renderFullApp();
        const glossaryButton = screen.getByRole("button", {
            name: /Glossary/i,
        });

        userEvent.click(glossaryButton);
        const element: HTMLElement = await screen.findByText(/Glossary Page/i);
        expect(element).toBeInTheDocument();
    });

    test("Clicking About changes to about page.", () => {
        renderFullApp();
        const aboutButton = screen.getByRole("button", {
            name: /About/i,
        });
        userEvent.click(aboutButton);
        const element: HTMLElement = await screen.findByText(/About Page/i);
        expect(element).toBeInTheDocument();
    });

    test("Clicking to another screen, then clicking back to home return to home.", () => {
        renderFullApp();
        const aboutButton = screen.getByRole("button", {
            name: /About/i,
        });
        userEvent.click(aboutButton);
        const homeButton = screen.getByRole("button", {
            name: /Home/i,
        });
        userEvent.click(homeButton);
        expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    });
});
