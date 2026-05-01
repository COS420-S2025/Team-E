import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Glossary from "../pages/Glossary";

const CI_MODE = process.env.CI_MODE === "true";
const testIfNotCI = CI_MODE ? test.skip : test;

describe("Checking that certain elements are present.", () => {
  test("There is a type 2 header:", () => {
    render(
      <MemoryRouter>
        <Glossary />
      </MemoryRouter>,
    );
    const header2 = screen.getByRole("heading", { level: 2 });
    expect(header2).toBeInTheDocument();
  });

  test("Divider containing GlossaryText component is present:", () => {
    render(
      <MemoryRouter>
        <Glossary />
      </MemoryRouter>,
    );
    const glossDiv = screen.getByTestId("glossTextHere");
    expect(glossDiv).toBeInTheDocument();
  });

  test("Text within GlossaryText component is present:", () => {
    render(
      <MemoryRouter>
        <Glossary />
      </MemoryRouter>,
    );
    const glossWords = screen.getByText(/Table of Contents/i);
    expect(glossWords).toBeInTheDocument();
  });
});

testIfNotCI(
  "Clicking a link updates the URL hash (requires database):",
  async () => {
    render(
      <MemoryRouter>
        <Glossary />
      </MemoryRouter>,
    );

    const cpuLink = await screen.findByRole("link", { name: "RAM" });

    await userEvent.click(cpuLink);

    expect(window.location.hash).toBe("#ram");
  },
);

describe("Checking that the return to top button is present and functional.", () => {
  test("Return to top button is present:", () => {
    render(
      <MemoryRouter>
        <Glossary />
      </MemoryRouter>,
    );
    const returnToTopButton = screen.getByText(/⬆/i);
    expect(returnToTopButton).toBeInTheDocument();
  });

  test("Clicking the return to top button scrolls to the top:", () => {
    render(
      <MemoryRouter>
        <Glossary />
      </MemoryRouter>,
    );
    window.scrollTo(0, 1000);
    const returnToTopButton = screen.getByText(/⬆/i);
    userEvent.click(returnToTopButton);
    expect(window.scrollY).toBe(0);
  });
});
