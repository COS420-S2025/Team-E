/** used AI to make this testing */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Filter, { buildLaptopFilters } from "../Component/Filter";

describe("Filter checkboxes", () => {
  test("renders all checkbox filter options", () => {
    const onApplyFilters = jest.fn();

    render(<Filter appliedFilterIds={[]} onApplyFilters={onApplyFilters} />);

    expect(screen.getByLabelText("Under $1000")).toBeInTheDocument();
    expect(screen.getByLabelText("0 to 7")).toBeInTheDocument();
    expect(screen.getByLabelText("0 to 31 GB")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Apply Filters/i }),
    ).toBeInTheDocument();
  });

  test("does not apply when checkbox is clicked until apply button is pressed", () => {
    const onApplyFilters = jest.fn();

    render(<Filter appliedFilterIds={[]} onApplyFilters={onApplyFilters} />);

    fireEvent.click(screen.getByLabelText("Under $1000"));

    expect(onApplyFilters).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: /Apply Filters/i }));
    expect(onApplyFilters).toHaveBeenCalledWith(["price-under-1000"]);
  });

  test("removes pending checked item and applies remaining filters", () => {
    const onApplyFilters = jest.fn();

    render(
      <Filter
        appliedFilterIds={["price-under-1000", "memory-0-31"]}
        onApplyFilters={onApplyFilters}
      />,
    );

    fireEvent.click(screen.getByLabelText("Under $1000"));
    fireEvent.click(screen.getByRole("button", { name: /Apply Filters/i }));

    expect(onApplyFilters).toHaveBeenCalledWith(["memory-0-31"]);
  });

  test("buildLaptopFilters returns selected filter definitions", () => {
    const selected = buildLaptopFilters(["price-under-1000", "memory-0-31"]);

    expect(selected).toHaveLength(2);
    expect(selected.map((filter) => filter.name)).toEqual([
      "Under 1000",
      "0-31 GB RAM",
    ]);
  });
});
