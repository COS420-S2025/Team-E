/** used AI to make this testing */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Filter, { buildLaptopFilters } from "../Component/Filter";

describe("Filter checkboxes", () => {
  test("renders all checkbox filter options", () => {
    const onApplyFilters = jest.fn();

    render(<Filter appliedFilterIds={[]} onApplyFilters={onApplyFilters} />);

    expect(screen.getByLabelText("Under 100000")).toBeInTheDocument();
    expect(screen.getByLabelText("512 GB")).toBeInTheDocument();
    expect(screen.getByLabelText("16 GB RAM")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Apply Filters/i })).toBeInTheDocument();
  });

  test("does not apply when checkbox is clicked until apply button is pressed", () => {
    const onApplyFilters = jest.fn();

    render(<Filter appliedFilterIds={[]} onApplyFilters={onApplyFilters} />);

    fireEvent.click(screen.getByLabelText("Under 100000"));

    expect(onApplyFilters).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: /Apply Filters/i }));
    expect(onApplyFilters).toHaveBeenCalledWith(["price-under-100000"]);
  });

  test("removes pending checked item and applies remaining filters", () => {
    const onApplyFilters = jest.fn();

    render(
      <Filter
        appliedFilterIds={["price-under-100000", "memory-16"]}
        onApplyFilters={onApplyFilters}
      />,
    );

    fireEvent.click(screen.getByLabelText("Under 100000"));
    fireEvent.click(screen.getByRole("button", { name: /Apply Filters/i }));

    expect(onApplyFilters).toHaveBeenCalledWith(["memory-16"]);
  });

  test("buildLaptopFilters returns selected filter definitions", () => {
    const selected = buildLaptopFilters(["price-under-100000", "storage-512"]);

    expect(selected).toHaveLength(2);
    expect(selected.map((filter) => filter.name)).toEqual(["Under 100000", "512 GB"]);
  });
});
