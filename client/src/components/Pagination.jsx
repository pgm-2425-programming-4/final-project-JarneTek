import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) {
  return (
    <div className="pagination-container">
      {/* Page Size Selector */}
      <div className="page-size-selector">
        <label htmlFor="pageSize">Items per pagina:</label>
        <select
          id="pageSize"
          className="form-select"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          <option value={5}>5 per pagina</option>
          <option value={10}>10 per pagina</option>
          <option value={25}>25 per pagina</option>
        </select>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            className="pagination-button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Vorige
          </button>

          <span className="pagination-info">
            Pagina {currentPage} van {totalPages}
          </span>

          <button
            className="pagination-button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Volgende
          </button>
        </div>
      )}
    </div>
  );
}
