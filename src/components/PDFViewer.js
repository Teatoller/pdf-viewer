import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function PDFViewer() {
  return (
    <div className="container">
      <form>
        <input type="file" className="form-control" />
        <button type="submit" className="btn btn-primary">
          View PDF
        </button>
      </form>
      <h2>View PDF</h2>
      <div className="pdf-container"></div>
    </div>
  );
}
