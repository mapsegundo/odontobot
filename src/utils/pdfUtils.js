import { jsPDF } from "jspdf";
import odontoLogo from "../assets/images/odonto.png";

export const generatePDF = (element, title) => {
  const pdf = new jsPDF();

  // Adicionar logotipo
  const logoWidth = 50;
  const logoHeight = 50;
  const logoX = (pdf.internal.pageSize.getWidth() - logoWidth) / 2;
  const logoY = 10;
  pdf.addImage(odontoLogo, "PNG", logoX, logoY, logoWidth, logoHeight);

  // Adicionar título principal
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  const titleY = logoY + logoHeight + 10;
  pdf.text("OdontoBot", pdf.internal.pageSize.getWidth() / 2, titleY, {
    align: "center",
  });

  // Adicionar conteúdo formatado
  let cursorY = titleY + 20;
  const marginLeft = 10;
  const maxWidth = pdf.internal.pageSize.getWidth() - 20;
  const lineHeight = 10;

  const paragraphs = element.querySelectorAll("p, h1, h2, ul, li, a");
  const links = [];

  paragraphs.forEach((paragraph) => {
    if (cursorY > 270) {
      pdf.addPage();
      cursorY = 20;
    }

    if (paragraph.tagName === "H1" || paragraph.tagName === "H2") {
      cursorY += lineHeight;
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(16);
      pdf.text(paragraph.textContent, marginLeft, cursorY);
      cursorY += lineHeight;
    } else if (paragraph.tagName === "UL") {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      paragraph.querySelectorAll("li").forEach((item) => {
        const textLines = pdf.splitTextToSize(
          `- ${item.textContent}`,
          maxWidth - 10
        );
        textLines.forEach((line) => {
          pdf.text(line, marginLeft + 5, cursorY);
          cursorY += 7;
        });
      });
    } else if (paragraph.tagName === "A") {
      const linkText = paragraph.textContent;
      const href = paragraph.href;
      links.push({ text: linkText, url: href });
    } else if (paragraph.tagName === "P") {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      const textLines = pdf.splitTextToSize(paragraph.textContent, maxWidth);
      textLines.forEach((line) => {
        pdf.text(line, marginLeft, cursorY);
        cursorY += 7;
      });
    }
  });

  if (links.length > 0) {
    if (cursorY > 250) {
      pdf.addPage();
      cursorY = 20;
    }
    cursorY += 20;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("Links Úteis", marginLeft, cursorY);
    cursorY += lineHeight;

    links.forEach((link) => {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      const formattedText = `${link.text} (${link.url})`;
      const splitText = pdf.splitTextToSize(formattedText, maxWidth);
      splitText.forEach((line) => {
        pdf.textWithLink(line, marginLeft, cursorY, { url: link.url });
        cursorY += 7;
      });
    });
  }

  pdf.save(`${title}.pdf`);
};
