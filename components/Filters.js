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

export default function Filters() {
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
            <span style={{ fontSize: 12, color: "#9b9b9b" }}>
              {openSections[group.key] ? "▾" : "▸"}
            </span>
          </div>

          <div
            id={`panel-${group.key}`}
            className="filter-accordion"
            style={{ display: openSections[group.key] ? "block" : "none" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: 13, color: "#8f8f8f" }}>
                {group.options.length} options
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  clearGroup(group.key);
                }}
                className="u-hidden"
                aria-hidden="true"
              >
                Unselect all
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {group.options.map((opt) => (
                <label
                  key={opt.id}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    fontSize: 14,
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
        <div className="filter-accordion" style={{ paddingTop: 8 }}>
          <label
            htmlFor="price-range"
            style={{
              display: "block",
              marginBottom: 6,
              color: "#666",
              fontSize: 13,
            }}
          >
            Max price
          </label>
          <input
            id="price-range"
            type="range"
            min="0"
            max="500"
            defaultValue="500"
            style={{ width: "100%" }}
            onChange={() => {
              /* placeholder — wire to filter logic later */
            }}
          />
          <div style={{ fontSize: 12, color: "#9b9b9b", marginTop: 6 }}>
            Showing up to ₹500
          </div>
        </div>
      </div>

      {/* CTA area */}
      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <button
          onClick={() => {
            // Reset all selections
            setSelections({});
          }}
          style={{
            padding: "10px 12px",
            border: "1px solid #e8e8e8",
            background: "#fff",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Clear
        </button>

        <button
          onClick={() => {
            alert("Apply filters - implement handler to filter products");
          }}
          style={{
            padding: "10px 12px",
            background: "#111",
            color: "#fff",
            border: "1px solid #111",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Apply
        </button>
      </div>
    </aside>
  );
}
