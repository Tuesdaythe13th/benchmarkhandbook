import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
  className?: string;
}

interface EnhancedTableProps<T> {
  data: T[];
  columns: Column<T>[];
  title?: string;
  striped?: boolean;
  hoverable?: boolean;
  animated?: boolean;
  className?: string;
}

type SortDirection = "asc" | "desc" | null;

/**
 * EnhancedTable Component
 * Provides consistent styling, sorting, animations, and interactivity
 * Used across all sections for data visualization
 */
export function EnhancedTable<T extends Record<string, any>>({
  data,
  columns,
  title,
  striped = true,
  hoverable = true,
  animated = true,
  className = "",
}: EnhancedTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortKey(null);
        setSortDirection(null);
      }
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });
  }, [data, sortKey, sortDirection]);

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      {title && (
        <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-slate-300 bg-slate-50">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                onClick={() =>
                  col.sortable && handleSort(col.key)
                }
                className={`px-4 py-3 text-left text-sm font-bold text-slate-700 ${
                  col.sortable
                    ? "cursor-pointer hover:bg-slate-100 transition-colors"
                    : ""
                } ${col.className || ""}`}
              >
                <div className="flex items-center gap-2">
                  <span>{col.label}</span>
                  {col.sortable && sortKey === col.key && (
                    <span className="text-orange-500">
                      {sortDirection === "asc" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-slate-200 transition-all duration-200 ${
                striped && idx % 2 === 0 ? "bg-slate-50" : "bg-white"
              } ${
                hoverable
                  ? "hover:bg-orange-50 hover:shadow-sm"
                  : ""
              } ${animated ? "animate-fadeIn" : ""}`}
              style={{
                animationDelay: animated ? `${idx * 30}ms` : undefined,
              }}
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`px-4 py-3 text-sm text-slate-700 ${col.className || ""}`}
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnhancedTable;
