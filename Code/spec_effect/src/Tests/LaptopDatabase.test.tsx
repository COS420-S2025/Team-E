import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LaptopDatabase from "../pages/LaptopEditor";

describe("LaptopDatabase", () => {
  test("renders the Laptop Database heading", () => {
    render(
      <MemoryRouter>
        <LaptopDatabase />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: /Laptop Database/i }),
    ).toBeInTheDocument();
  });

  test("renders the Add to Laptop Database button", () => {
    render(
      <MemoryRouter>
        <LaptopDatabase />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("button", { name: /Add to Laptop Database/i }),
    ).toBeInTheDocument();
  });
});
