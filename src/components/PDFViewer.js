import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function PDFViewer() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result);
        };
      } else {
        setPdfFile(null);
      }
    } else {
      console.log("Error: Please select a pdf file");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  return (
    <div className="container">
      <form onClick={handleSubmit}>
        <input type="file" className="form-control" onChange={handleChange} />
        <button type="submit" className="btn btn-primary">
          View PDF
        </button>
      </form>
      <h2>View PDF</h2>
      <div className="pdf-container"></div>
    </div>
  );
}
