import React from "react";
import "./styles.css";

const DownloadButton = ({ downloadPDF }) => {
  return (
    <div className="text-center">
      <button
        className="btn btn-primary btn-lg text-center m-3 download-button"
        onClick={downloadPDF}
      >
        Baixar em PDF
      </button>
    </div>
  );
};

export default DownloadButton;
