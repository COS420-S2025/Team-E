import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import About from "../pages/About";

describe("About page is rendered", () => {
  //Make sure the main heading is present and correctly labeled.
  test("renders the main heading", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /About Page/i }),
    ).toBeInTheDocument();
  });

  //Make sure you are following semantic HTML and ARIA roles guidelines.

  expect.extend(toHaveNoViolations);

  test("About screen should have no accessibility violations", async () => {
    const { container } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  //Make sure the purpose paragraph is present and contains the correct text.
  test("renders the purpose paragraph", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    const Paragraph = screen.getByTestId("purpose-paragraph");
    expect(Paragraph).toBeInTheDocument();
    expect(Paragraph).toHaveTextContent(/The purpose of SpecEffect is to/i);
  });
});
