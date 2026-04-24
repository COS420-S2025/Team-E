/** use AI to make the start of this component */

import React, { useEffect, useState } from "react";
import { query, where } from "firebase/firestore";
import { LaptopFilter } from "../LaptopFilter";

type FilterCategoryName =
  | "priceCents"
  | "storageCapacityGb"
  | "memoryGb"
  | "cpuCoreCount";

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
  { id: "price-under-100000", category: "priceCents", label: "Under 100000", filter: { name: "Under 100000", queryModifier: (q) => query(q, where("priceCents", "<=", 100000)) } },
  { id: "price-under-150000", category: "priceCents", label: "Under 150000", filter: { name: "Under 150000", queryModifier: (q) => query(q, where("priceCents", "<=", 150000)) } },
  { id: "price-under-200000", category: "priceCents", label: "Under 200000", filter: { name: "Under 200000", queryModifier: (q) => query(q, where("priceCents", "<=", 200000)) } },
  { id: "storage-256", category: "storageCapacityGb", label: "256 GB", filter: { name: "256 GB", queryModifier: (q) => query(q, where("storageCapacityGb", "==", 256)) } },
  { id: "storage-512", category: "storageCapacityGb", label: "512 GB", filter: { name: "512 GB", queryModifier: (q) => query(q, where("storageCapacityGb", "==", 512)) } },
  { id: "storage-1024", category: "storageCapacityGb", label: "1024 GB", filter: { name: "1024 GB", queryModifier: (q) => query(q, where("storageCapacityGb", "==", 1024)) } },
  { id: "memory-8", category: "memoryGb", label: "8 GB RAM", filter: { name: "8 GB RAM", queryModifier: (q) => query(q, where("memoryGb", "==", 8)) } },
  { id: "memory-16", category: "memoryGb", label: "16 GB RAM", filter: { name: "16 GB RAM", queryModifier: (q) => query(q, where("memoryGb", "==", 16)) } },
  { id: "memory-32", category: "memoryGb", label: "32 GB RAM", filter: { name: "32 GB RAM", queryModifier: (q) => query(q, where("memoryGb", "==", 32)) } },
  { id: "cpu-cores-4", category: "cpuCoreCount", label: "4 cores", filter: { name: "4 cores", queryModifier: (q) => query(q, where("cpuCoreCount", "==", 4)) } },
  { id: "cpu-cores-6", category: "cpuCoreCount", label: "6 cores", filter: { name: "6 cores", queryModifier: (q) => query(q, where("cpuCoreCount", "==", 6)) } },
  { id: "cpu-cores-8", category: "cpuCoreCount", label: "8 cores", filter: { name: "8 cores", queryModifier: (q) => query(q, where("cpuCoreCount", "==", 8)) } },
];

const FILTER_CATEGORIES: FilterCategory[] = [
  { title: "priceCents", options: FILTER_OPTIONS.filter((option) => option.category === "priceCents") },
  { title: "storageCapacityGb", options: FILTER_OPTIONS.filter((option) => option.category === "storageCapacityGb") },
  { title: "memoryGb", options: FILTER_OPTIONS.filter((option) => option.category === "memoryGb") },
  { title: "cpuCoreCount", options: FILTER_OPTIONS.filter((option) => option.category === "cpuCoreCount") },
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
        <div key={category.title} style={{ marginBottom: "12px" }}>
          <strong>{category.title}</strong>
          {category.options.map((option) => (
            <label key={option.id} style={{ display: "block", marginTop: "6px" }}>
              <input
                type="checkbox"
                checked={selectedSet.has(option.id)}
                onChange={() => toggleFilter(option.id)}
                style={{ width: "16px", height: "16px", marginRight: "8px", verticalAlign: "middle" }}
              />
              {option.label}
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