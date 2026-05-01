import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddToLaptopDatabase from "../pages/AddToLaptopEditor";

describe("AddToLaptopDatabase", () => {
  test("renders the Add to Laptop Database heading", () => {
    render(
      <MemoryRouter>
        <AddToLaptopDatabase />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: /Add to Laptop Database/i }),
    ).toBeInTheDocument();
  });

  test("renders all required input fields", () => {
    render(
      <MemoryRouter>
        <AddToLaptopDatabase />
      </MemoryRouter>,
    );
    expect(screen.getByLabelText(/Laptop Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Memory \(GB\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Storage Type/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Storage Capacity \(GB\)/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/CPU Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Core Count/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Bench Single/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Bench Multi/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GPU Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/VRAM \(MB\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Benchmark 3D/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Benchmark 2D/i)).toBeInTheDocument();
  });

  test("renders the Add Laptop button", () => {
    render(
      <MemoryRouter>
        <AddToLaptopDatabase />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("button", { name: /Add Laptop/i }),
    ).toBeInTheDocument();
  });
});
