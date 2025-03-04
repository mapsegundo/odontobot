import React from "react";

const DownloadButton = ({ downloadPDF }) => {
  return (
    <div className="text-center">
      <button
        className="btn vw-50 btn-lg text-center m-3 saidaButton"
        onClick={downloadPDF}
      >
        Baixar em PDF
      </button>
    </div>
  );
};

export default DownloadButton;
