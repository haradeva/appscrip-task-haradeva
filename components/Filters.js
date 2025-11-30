"use client";

import { useState } from "react";

const FILTERS = [
  {
    key: "customizable",
    title: "CUSTOMIZABLE",
    type: "single",
    options: [{ id: "customizable", label: "Customizable" }],
  },
  {
    key: "idealFor",
    title: "IDEAL FOR",
    type: "multi",
    options: [
      { id: "all", label: "All" },
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "baby-kids", label: "Baby & Kids" },
    ],
  },
  {
    key: "occasion",
    title: "OCCASION",
    type: "multi",
    options: [
      { id: "all", label: "All" },
      { id: "formal", label: "Formal" },
      { id: "casual", label: "Casual" },
      { id: "sport", label: "Sport" },
    ],
  },
  {
    key: "work",
    title: "WORK",
    type: "multi",
    options: [
      { id: "all", label: "All" },
      { id: "office", label: "Office" },
      { id: "outdoor", label: "Outdoor" },
    ],
  },
  {
    key: "fabric",
    title: "FABRIC",
    type: "multi",
    options: [
      { id: "all", label: "All" },
      { id: "cotton", label: "Cotton" },
      { id: "leather", label: "Leather" },
      { id: "synthetic", label: "Synthetic" },
    ],
  },
  {
    key: "segment",
    title: "SEGMENT",
    type: "multi",
    options: [
      { id: "all", label: "All" },
      { id: "premium", label: "Premium" },
      { id: "mid", label: "Mid" },
      { id: "value", label: "Value" },
    ],
  },
  {
    key: "suitableFor",
    title: "SUITABLE FOR",
    type: "multi",
    options: [
      { id: "all", label: "All" },
      { id: "travel", label: "Travel" },
      { id: "gift", label: "Gift" },
      { id: "everyday", label: "Everyday" },
    ],
  },
  {
    key: "rawMaterials",
    title: "RAW MATERIALS",
    type: "multi",
    options: [
      { id: "all", label: "All" },
      { id: "metal", label: "Metal" },
      { id: "wood", label: "Wood" },
      { id: "fabric", label: "Fabric" },
    ],
  },
  {
    key: "pattern",
    title: "PATTERN",
    type: "multi",
    options: [
      { id: "all", label: "All" },
      { id: "striped", label: "Striped" },
      { id: "plain", label: "Plain" },
      { id: "printed", label: "Printed" },
    ],
  },
];

export default function Filters({ onApplyFilters, onClearFilters, onCancel }) {
  const defaultOpen = {
    customizable: true,
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  };
  const [openSections, setOpenSections] = useState(defaultOpen);
  const [selections, setSelections] = useState({});
  const [priceRange, setPriceRange] = useState(5000);

  const toggleSection = (key) => {
    setOpenSections((s) => ({ ...s, [key]: !s[key] }));
  };

  const toggleCheckbox = (id) => {
    setSelections((s) => {
      const next = { ...s };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  };

  const clearGroup = (group) => {
    const groupObj = FILTERS.find((g) => g.key === group);
    if (!groupObj) return;
    setSelections((s) => {
      const next = { ...s };
      groupObj.options.forEach((opt) => {
        if (next[opt.id]) delete next[opt.id];
      });
      return next;
    });
  };

  const handleApply = () => {
    if (onApplyFilters) {
      onApplyFilters({ selections, priceRange });
    }
  };

  const handleClear = () => {
    setSelections({});
    setPriceRange(500);
    if (onClearFilters) {
      onClearFilters();
    }
  };

  return (
    <aside aria-label="Product filters">
      <h2>Filters</h2>

      {FILTERS.map((group) => (
        <div className="filter-block" key={group.key}>
          <div
            className="filter-title"
            role="button"
            onClick={() => toggleSection(group.key)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleSection(group.key);
            }}
            tabIndex={0}
            aria-expanded={!!openSections[group.key]}
            aria-controls={`panel-${group.key}`}
          >
            <span>{group.title}</span>
            <span>{openSections[group.key] ? "▾" : "▸"}</span>
          </div>

          <div
            id={`panel-${group.key}`}
            className={`filter-accordion ${
              openSections[group.key] ? "show" : ""
            }`}
            style={{ display: openSections[group.key] ? "block" : "none" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                fontSize: 12,
                color: "#8f8f8f",
              }}
            >
              <div>{group.options.length} options</div>
            </div>{" "}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {group.options.map((opt) => (
                <label
                  key={opt.id}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={!!selections[opt.id]}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleCheckbox(opt.id);
                    }}
                    aria-checked={!!selections[opt.id]}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="filter-block">
        <div className="filter-title" style={{ cursor: "default" }}>
          <span>PRICE</span>
        </div>
        <div className="filter-accordion show" style={{ paddingTop: 8 }}>
          <label
            htmlFor="price-range"
            style={{
              display: "block",
              marginBottom: 6,
              color: "#8f8f8f",
              fontSize: 13,
            }}
          >
            Max price
          </label>
          <input
            id="price-range"
            type="range"
            min="0"
            max="5000"
            value={priceRange}
            style={{ width: "100%" }}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <div style={{ fontSize: 12, color: "#8f8f8f", marginTop: 6 }}>
            Showing up to ₹{priceRange}
          </div>
        </div>
      </div>

      {/* CTA area */}
      <div className="filter-buttons">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleClear} type="button">
          Clear
        </button>
        <button
          onClick={() => {
            if (onCancel) onCancel();
          }}
          type="button"
        >
          Cancel
        </button>
        <button onClick={handleApply} className="apply" type="button">
          Apply
        </button>
      </div>
    </aside>
  );
}
