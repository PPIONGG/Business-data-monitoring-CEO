import { Button, Dropdown } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";

export default function FinancialHeader() {
  const handleExportPDF = async () => {
    window.scrollTo(0, 0); // **เลื่อนไปบนสุดของหน้าเว็บ**
    await new Promise((resolve) => setTimeout(resolve, 500)); // รอให้ DOM โหลดเสร็จ

    const input = document.getElementById("financial-report");
    const exportButton = document.getElementById("export-button");

    if (!input) return;

    // 🔹 ซ่อนปุ่ม Export
    if (exportButton) exportButton.style.display = "none";

    const canvas = await html2canvas(input, {
      scrollX: 0,
      scrollY: 0,
      scale: 2,
      windowWidth: document.documentElement.scrollWidth, // รองรับ scroll
    });

    // 🔹 แสดงปุ่มกลับมา
    if (exportButton) exportButton.style.display = "block";

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape");
    pdf.addImage(imgData, "PNG", 10, 10, 280, 150);
    pdf.save("financial-report.pdf");
  };

  const handleExportPNG = async () => {
    const input = document.getElementById("financial-report");
    const exportButton = document.getElementById("export-button");

    if (!input) {
      console.error("❌ ไม่พบ element financial-report");
      return;
    }

    window.scrollTo(0, 0);
    await new Promise((resolve) => setTimeout(resolve, 500)); // รอให้ DOM โหลดเสร็จ

    // 🔹 ซ่อนปุ่ม Export
    if (exportButton) exportButton.style.display = "none";

    // 📌 จับภาพด้วย Padding 10px
    const canvas = await html2canvas(input, {
      scale: 2,
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.scrollWidth,
      useCORS: true,
      backgroundColor: null,
    });

    // 🔹 แสดงปุ่มกลับมา
    if (exportButton) exportButton.style.display = "block";

    // 📌 สร้าง Canvas ใหม่ที่มี Padding
    const padding = 10; // กำหนด padding 10px
    const newCanvas = document.createElement("canvas");
    newCanvas.width = canvas.width + padding * 2;
    newCanvas.height = canvas.height + padding * 2;
    const ctx = newCanvas.getContext("2d");

    if (ctx) {
      ctx.fillStyle = "white"; // ตั้งสีพื้นหลัง
      ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
      ctx.drawImage(canvas, padding, padding);
    }

    // 📌 ดาวน์โหลดเป็น PNG
    const link = document.createElement("a");
    link.href = newCanvas.toDataURL("image/png");
    link.download = "financial-report.png";
    link.click();
  };

  const handleExportXLSX = () => {
    const data = [
      ["วันที่", "ยอดสุทธิ"],
      ["1/1/2560", "1.19M"],
      ["1/2/2560", "859K"],
      ["1/3/2560", "1.11M"],
      ["1/4/2560", "786K"],
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Financial Report");

    XLSX.writeFile(wb, "financial-report.xlsx");
  };

  const menuItems = [
    { key: "pdf", label: "Export PDF", onClick: handleExportPDF },
    { key: "png", label: "Export PNG", onClick: handleExportPNG },
    { key: "xlsx", label: "Export Excel", onClick: handleExportXLSX },
  ];

  return (
    <div
      style={{
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 16 }}>รายงานการเงิน</div>
      <Dropdown menu={{ items: menuItems }} placement="bottomRight">
        <Button
          id="export-button"
          type="primary"
          icon={<UploadOutlined />}
          size="middle"
          danger
        >
          Export
        </Button>
      </Dropdown>
    </div>
  );
}
