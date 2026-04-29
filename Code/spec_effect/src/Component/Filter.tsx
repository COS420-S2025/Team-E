/** use AI to make the start of this component */

import React, { useEffect, useState } from "react";
import { query, where } from "firebase/firestore";
import { LaptopFilter } from "../LaptopFilter";

type FilterCategoryName =
  | "Price"
  | "Use-case"
  | "RAM"
  | "CPU Cores";

export interface FilterOption {
  id: string;
  category: FilterCategoryName;
  label: string;
  filter: LaptopFilter;
}

interface FilterCategory {
  title: FilterCategoryName;
  options: FilterOption[];
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: "price-under-500", category: "Price", label: "Under $500", filter: { name: "Under 500", queryModifier: (q) => query(q, where("priceCents", "<=", 50000)) } },
  { id: "price-under-1000", category: "Price", label: "Under $1000", filter: { name: "Under 1000", queryModifier: (q) => query(q, where("priceCents", "<=", 100000)) } },
  { id: "price-under-1500", category: "Price", label: "Under $1500", filter: { name: "Under 1500", queryModifier: (q) => query(q, where("priceCents", "<=", 150000)) } },
  { id: "price-under-2000", category: "Price", label: "Under $2000", filter: { name: "Under 2000", queryModifier: (q) => query(q, where("priceCents", "<=", 200000)) } },
  { id: "memory-0-31", category: "RAM", label: "0 to 31 GB", filter: { name: "0-31 GB RAM", queryModifier: (q) => query(q, where("memoryGb", ">=", 0), where("memoryGb", "<=", 31)) } },
  { id: "memory-32-64", category: "RAM", label: "32 to 63 GB", filter: { name: "32-63 GB RAM", queryModifier: (q) => query(q, where("memoryGb", ">=", 32), where("memoryGb", "<=", 63)) } },
  { id: "memory-64-96", category: "RAM", label: "64 to 95 GB", filter: { name: "64-95 GB RAM", queryModifier: (q) => query(q, where("memoryGb", ">=", 64), where("memoryGb", "<=", 95)) } },
  { id: "memory-96-128", category: "RAM", label: "96 to 128 GB", filter: { name: "96-128 GB RAM", queryModifier: (q) => query(q, where("memoryGb", ">=", 96), where("memoryGb", "<=", 128)) } },
  { id: "cpu-cores-0-8", category: "CPU Cores", label: "0 to 7", filter: { name: "0-7 cores", queryModifier: (q) => query(q, where("cpuCoreCount", ">=", 0) , where("cpuCoreCount", "<=", 7)) } },
  { id: "cpu-cores-8-16", category: "CPU Cores", label: "8 to 15", filter: { name: "8-15 cores", queryModifier: (q) => query(q, where("cpuCoreCount", ">=", 8) , where("cpuCoreCount", "<=", 15)) } },
  { id: "cpu-cores-16-24", category: "CPU Cores", label: "16 to 24", filter: { name: "16-24 cores", queryModifier: (q) => query(q, where("cpuCoreCount", ">=", 16) , where("cpuCoreCount", "<=", 24)) } },
  { id: "Light Gaming", category: "Use-case", label: "Light Gaming", filter: { name: "Light Gaming", queryModifier: (q) => query(q, where("gpuVramMb", ">=", 4000)) } },
  { id: "Heavy Gaming", category: "Use-case", label: "Heavy Gaming", filter: { name: "Heavy Gaming", queryModifier: (q) => query(q, where("gpuVramMb", ">=", 8500)) } },
  { id: "Programming", category: "Use-case", label: "Programming", filter: { name: "Programming", queryModifier: (q) => query(q, where("cpuBenchmarkSingleThread", ">", 2000), where("memoryGb", ">=", 12), where("cpuCoreCount", ">=", 6)) } },
  { id: "Multitasking", category: "Use-case", label: "Multitasking", filter: { name: "Multitasking", queryModifier: (q) => query(q, where("cpuBenchmarkMultiThread", ">=", 12000), where("cpuCoreCount", ">=", 8)) } },
  { id: "Office work", category: "Use-case", label: "Office work", filter: { name: "Office work", queryModifier: (q) => query(q, where("cpuBenchmarkSingleThread", ">=", 1500), where("cpuCoreCount", ">=", 4)) } },
  { id: "Light creative work", category: "Use-case", label: "Light creative work", filter: { name: "Light creative work", queryModifier: (q) => query(q, where("cpuBenchmarkSingleThread", ">=", 3000), where("gpuBenchmark2d", ">=", 400)) } },
  { id: "Heavy creative work", category: "Use-case", label: "Heavy creative work", filter: { name: "Heavy creative work", queryModifier: (q) => query(q, where("memoryGb", ">=", 12), where("cpuBenchmarkSingleThread", ">=", 3000), where("gpuBenchmark2d", ">=", 400), where("gpuVramMb", ">=", 8000), where("gpuBenchmark3d", ">=", 15000)) } },
];

const FILTER_CATEGORIES: FilterCategory[] = [
  { title: "Price", options: FILTER_OPTIONS.filter((option) => option.category === "Price") },
  { title: "Use-case", options: FILTER_OPTIONS.filter((option) => option.category === "Use-case") },
  { title: "RAM", options: FILTER_OPTIONS.filter((option) => option.category === "RAM") },
  { title: "CPU Cores", options: FILTER_OPTIONS.filter((option) => option.category === "CPU Cores") },
];
const FILTER_OPTION_BY_ID = new Map(
  FILTER_OPTIONS.map((option) => [option.id, option] as const),
);

interface FilterProps {
  appliedFilterIds: string[];
  onApplyFilters: (selectedIds: string[]) => void;
}

const Filter = ({ appliedFilterIds, onApplyFilters }: FilterProps) => {
  const [pendingFilterIds, setPendingFilterIds] = useState<string[]>(appliedFilterIds);
  const selectedSet = new Set(pendingFilterIds);

  useEffect(() => {
    setPendingFilterIds(appliedFilterIds);
  }, [appliedFilterIds]);

  const toggleFilter = (id: string) => {
    setPendingFilterIds((currentPendingIds) => {
      if (currentPendingIds.includes(id)) {
        return currentPendingIds.filter((selectedId) => selectedId !== id);
      }

      const selectedOption = FILTER_OPTION_BY_ID.get(id);
      if (!selectedOption) {
        return currentPendingIds;
      }

      const nextPendingIds = currentPendingIds.filter((selectedId) => {
        const pendingOption = FILTER_OPTION_BY_ID.get(selectedId);
        return pendingOption?.category !== selectedOption.category;
      });

      return [...nextPendingIds, id];
    });
  };

  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      {FILTER_CATEGORIES.map((category) => (
        <div key={category.title} className="filter-category">
          <strong className="filter-category-title">{category.title}</strong>
          {category.options.map((option) => (
            <label key={option.id} className="filter-option-label">
              <input
                type="checkbox"
                checked={selectedSet.has(option.id)}
                onChange={() => toggleFilter(option.id)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      ))}
      <div className="filter-panel-actions">
        <button
          className="filter-apply-button"
          type="button"
          onClick={() => onApplyFilters(pendingFilterIds)}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export function buildLaptopFilters(selectedFilterIds: string[]): LaptopFilter[] {
  const selectedSet = new Set(selectedFilterIds);
  return FILTER_OPTIONS
    .filter((option) => selectedSet.has(option.id))
    .map((option) => option.filter);
}

export default Filter;