/** use AI to make the start of this component */

import React, { useEffect, useState } from "react";
import { query, where } from "firebase/firestore";
import { LaptopFilter } from "../LaptopFilter";

type FilterCategoryName =
  | "Price"
  | "Usecase"
  | "RAM"
  | "CpuCores";

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
  { id: "price-under-100000", category: "Price", label: "Under 100000", filter: { name: "Under 100000", queryModifier: (q) => query(q, where("priceCents", "<=", 100000)) } },
  { id: "price-under-150000", category: "Price", label: "Under 150000", filter: { name: "Under 150000", queryModifier: (q) => query(q, where("priceCents", "<=", 150000)) } },
  { id: "price-under-200000", category: "Price", label: "Under 200000", filter: { name: "Under 200000", queryModifier: (q) => query(q, where("priceCents", "<=", 200000)) } },
  { id: "memory-0-32", category: "RAM", label: "0-32 GB RAM", filter: { name: "0-32 GB RAM", queryModifier: (q) => query(q, where("memoryGb", ">=", 0), where("memoryGb", "<=", 32)) } },
  { id: "memory-32-64", category: "RAM", label: "32-64 GB RAM", filter: { name: "32-64 GB RAM", queryModifier: (q) => query(q, where("memoryGb", ">=", 32), where("memoryGb", "<=", 64)) } },
  { id: "memory-64-96", category: "RAM", label: "64-96 GB RAM", filter: { name: "64-96 GB RAM", queryModifier: (q) => query(q, where("memoryGb", ">=", 64), where("memoryGb", "<=", 96)) } },
  { id: "memory-96-128", category: "RAM", label: "96-128 GB RAM", filter: { name: "96-128 GB RAM", queryModifier: (q) => query(q, where("memoryGb", ">=", 96), where("memoryGb", "<=", 128)) } },
  { id: "cpu-cores-0-8", category: "CpuCores", label: "0-8 cores", filter: { name: "0-8 cores", queryModifier: (q) => query(q, where("cpuCoreCount", ">=", 0) , where("cpuCoreCount", "<=", 8)) } },
  { id: "cpu-cores-8-16", category: "CpuCores", label: "8-16 cores", filter: { name: "8-16 cores", queryModifier: (q) => query(q, where("cpuCoreCount", ">=", 8) , where("cpuCoreCount", "<=", 16)) } },
  { id: "cpu-cores-16-24", category: "CpuCores", label: "16-24 cores", filter: { name: "16-24 cores", queryModifier: (q) => query(q, where("cpuCoreCount", ">=", 16) , where("cpuCoreCount", "<=", 24)) } },
  { id: "Light Gaming", category: "Usecase", label: "Light Gaming", filter: { name: "Light Gaming", queryModifier: (q) => query(q, where("gpuVramMb", ">=", 4000)) } },
  { id: "Heavy Gaming", category: "Usecase", label: "Heavy Gaming", filter: { name: "Heavy Gaming", queryModifier: (q) => query(q, where("gpuVramMb", ">=", 8500)) } },
  { id: "Programming", category: "Usecase", label: "Programming", filter: { name: "Programming", queryModifier: (q) => query(q, where("cpuBenchmarkSingleThread", ">", 2000), where("memoryGb", ">=", 12), where("cpuCoreCount", ">=", 6)) } },
  { id: "Multitasking", category: "Usecase", label: "Multitasking", filter: { name: "Multitasking", queryModifier: (q) => query(q, where("cpuBenchmarkMultiThread", ">=", 12000), where("cpuCoreCount", ">=", 8)) } },
  { id: "Office work", category: "Usecase", label: "Office work", filter: { name: "Office work", queryModifier: (q) => query(q, where("cpuBenchmarkSingleThread", ">=", 1500), where("cpuCoreCount", ">=", 4)) } },
  { id: "Light creative work", category: "Usecase", label: "Light creative work", filter: { name: "Light creative work", queryModifier: (q) => query(q, where("cpuBenchmarkSingleThread", ">=", 3000), where("gpuBenchmark2d", ">=", 400)) } },
  { id: "Heavy creative work", category: "Usecase", label: "Heavy creative work", filter: { name: "Heavy creative work", queryModifier: (q) => query(q, where("memoryGb", ">=", 12), where("cpuBenchmarkSingleThread", ">=", 3000), where("gpuBenchmark2d", ">=", 400), where("gpuVramMb", ">=", 8000), where("gpuBenchmark3d", ">=", 15000)) } },
];

const FILTER_CATEGORIES: FilterCategory[] = [
  { title: "Price", options: FILTER_OPTIONS.filter((option) => option.category === "Price") },
  { title: "Usecase", options: FILTER_OPTIONS.filter((option) => option.category === "Usecase") },
  { title: "RAM", options: FILTER_OPTIONS.filter((option) => option.category === "RAM") },
  { title: "CpuCores", options: FILTER_OPTIONS.filter((option) => option.category === "CpuCores") },
];

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
    setPendingFilterIds((currentPendingIds) =>
      currentPendingIds.includes(id)
        ? currentPendingIds.filter((selectedId) => selectedId !== id)
        : [...currentPendingIds, id],
    );
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