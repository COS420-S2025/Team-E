import { render, screen } from "@testing-library/react";
import Footer from "../Component/Footer";

describe("Footer component", () => {
  test("renders the footer component", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  test("contains correct copyright year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightElement = screen.getByText(
      new RegExp(`© ${currentYear} SpecEffect`),
    );
    expect(copyrightElement).toBeInTheDocument();
  });
});
