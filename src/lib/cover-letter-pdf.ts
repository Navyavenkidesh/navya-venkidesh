import { PDFDocument, StandardFonts, rgb, type PDFPage, type PDFFont } from "pdf-lib";
import resumeAsset from "@/assets/resume.pdf";

export const RESUME_PDF_PATH = resumeAsset;
export const RESUME_PDF_FILENAME = "Navya_Venkidesh.pdf";

export type CoverLetterData = {
  company: string;
  role: string;
  hiringManager: string;
  location: string;
  date: string;
  subject: string;
  greeting: string;
  opening: string;
  body: string;
  closing: string;
};

const A4: [number, number] = [595.28, 841.89];
const navy = rgb(15 / 255, 23 / 255, 42 / 255);
const blue = rgb(59 / 255, 130 / 255, 246 / 255);
const mint = rgb(94 / 255, 234 / 255, 212 / 255);
const ink = rgb(23 / 255, 32 / 255, 51 / 255);
const muted = rgb(82 / 255, 96 / 255, 116 / 255);

function splitLine(text: string, font: PDFFont, size: number, maxWidth: number) {
  const safeText = text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/•/g, "|").replace(/[^\x20-\x7e]/g, " ");
  const words = safeText.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) current = candidate;
    else {
      if (current) lines.push(current);
      current = word;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function drawCoverHeader(page: PDFPage, regular: PDFFont, bold: PDFFont) {
  const height = A4[1];
  page.drawRectangle({ x: 0, y: height - 126, width: A4[0], height: 126, color: navy });
  page.drawRectangle({ x: 0, y: height - 126, width: 8, height: 126, color: blue });
  page.drawRectangle({ x: 8, y: height - 126, width: 126, height: 4, color: mint });
  page.drawText("NAVYA VENKIDESH", { x: 52, y: height - 55, size: 22, font: bold, color: rgb(1, 1, 1) });
  page.drawText("ML/AI ENGINEER · 2+ YEARS EXPERIENCE", { x: 52, y: height - 78, size: 9.5, font: bold, color: mint });
  page.drawText("Thrissur, Kerala, India  |  +91 9746844319", { x: 52, y: height - 102, size: 7.5, font: regular, color: rgb(.86, .9, .96) });
  page.drawText("navyaa.venkidesh@gmail.com", { x: 338, y: height - 102, size: 7.5, font: regular, color: rgb(.45, .7, 1) });
  page.drawText("COVER LETTER", { x: 465, y: height - 55, size: 7.5, font: bold, color: rgb(.78, .71, .99) });
}

export async function downloadApplicationPdf(data: CoverLetterData) {
  const output = await PDFDocument.create();
  const regular = await output.embedFont(StandardFonts.Helvetica);
  const bold = await output.embedFont(StandardFonts.HelveticaBold);
  let page = output.addPage(A4);
  drawCoverHeader(page, regular, bold);

  const margin = 52;
  const maxWidth = A4[0] - margin * 2;
  const bodySize = 10.2;
  const leading = 15.2;
  let y = A4[1] - 158;

  const addPage = () => {
    page = output.addPage(A4);
    drawCoverHeader(page, regular, bold);
    y = A4[1] - 158;
  };

  const ensureSpace = (needed: number) => {
    if (y - needed < 54) addPage();
  };

  const drawLine = (value: string, options?: { font?: PDFFont; size?: number; color?: ReturnType<typeof rgb>; gap?: number }) => {
    const chosenFont = options?.font ?? regular;
    const size = options?.size ?? bodySize;
    const lines = splitLine(value, chosenFont, size, maxWidth);
    ensureSpace(lines.length * leading + (options?.gap ?? 0));
    lines.forEach((line) => {
      page.drawText(line, { x: margin, y, size, font: chosenFont, color: options?.color ?? ink });
      y -= leading;
    });
    y -= options?.gap ?? 0;
  };

  drawLine(data.date, { color: muted, size: 9, gap: 16 });
  drawLine(data.hiringManager || "Hiring Manager", { font: bold, gap: 1 });
  drawLine(data.company || "Company", { gap: 1 });
  if (data.location) drawLine(data.location, { color: muted, gap: 14 });
  else y -= 14;
  drawLine(data.subject || `Application for ${data.role || "Machine Learning Developer"}`, { font: bold, color: navy, gap: 18 });
  drawLine(data.greeting || "Dear Hiring Manager,", { gap: 14 });

  [data.opening, data.body].filter(Boolean).forEach((paragraph) => {
    paragraph.split(/\n+/).filter(Boolean).forEach((part) => drawLine(part, { gap: 12 }));
  });

  drawLine(data.closing || "Thank you for your time and consideration. I would welcome the opportunity to discuss how my experience can support your team.", { gap: 18 });
  drawLine("Sincerely,", { gap: 18 });
  drawLine("Navya Venkidesh", { font: bold, color: navy, gap: 1 });
  drawLine("ML/AI Engineer", { size: 9, color: muted });

  const resumeResponse = await fetch(RESUME_PDF_PATH);
  if (!resumeResponse.ok) throw new Error("The resume PDF could not be loaded.");
  const resume = await PDFDocument.load(await resumeResponse.arrayBuffer());
  const copiedPages = await output.copyPages(resume, resume.getPageIndices());
  copiedPages.forEach((resumePage) => output.addPage(resumePage));

  output.setTitle(`Navya Venkidesh — ${data.role || "Machine Learning Developer"} Application`);
  output.setAuthor("Navya Venkidesh");
  output.setSubject(`Tailored cover letter and resume for ${data.company || "a machine learning opportunity"}`);
  output.setKeywords(["Navya Venkidesh", "Machine Learning Developer", data.company, data.role].filter(Boolean));
  output.setCreator("Navya Venkidesh Portfolio");
  output.setProducer("Navya Venkidesh Portfolio");

  const bytes = await output.save();
  const pdfBuffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(pdfBuffer).set(bytes);
  const blob = new Blob([pdfBuffer], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const company = (data.company || "Tailored").replace(/[^a-z0-9]+/gi, "_").replace(/^_+|_+$/g, "");
  anchor.href = url;
  anchor.download = `Navya_Venkidesh_${company}_Application.pdf`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}