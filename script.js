let project = { name: "เกมใหม่", items: [], vars: {} };

// สร้างโปรเจกต์ใหม่
function newProject() {
    if(confirm("ต้องการสร้างใหม่? งานเดิมจะหายไป")) {
        project = { name: "เกมใหม่", items: [], vars: {} };
        updateCanvas();
        alert("สร้างโปรเจกต์ใหม่เรียบร้อย — ทุกอย่างอยู่ในเว็บเท่านั้น");
    }
}

// บันทึก (เก็บในระบบเว็บ ไม่ออกไปภายนอก)
function saveProject() {
    localStorage.setItem("webGameProject", JSON.stringify(project));
    alert("✅ บันทึกเรียบร้อย — อยู่ในระบบเว็บเท่านั้น\n❌ ไม่สามารถดาวน์โหลดไฟล์ออกไปได้");
}

// ดูตัวอย่าง
function preview() {
    alert("🔎 กำลังเปิดดูตัวอย่าง...\nทุกอย่างทำงานภายในเว็บนี้เท่านั้น");
}

// เพิ่มสิ่งของ
function addItem(name) {
    project.items.push({ ชื่อ: name, ค่า: "ค่าเริ่มต้น" });
    updateCanvas();
}

// เพิ่มตัวแปร
function addVar(name) {
    project.vars[name] = 0;
    updateCanvas();
}

// อัปเดตหน้าจอ
function updateCanvas() {
    const c = document.getElementById("canvas");
    if(project.items.length === 0) {
        c.innerHTML = "<p>ยังไม่มีสิ่งของในเกม<br>เลือกเพิ่มจากแถบซ้าย</p>";
    } else {
        c.innerHTML = `<strong>รายการในเกม:</strong><br><br>` + project.items.map(i => `✅ ${i.ชื่อ}`).join("<br>");
    }
}

// โหลดอัตโนมัติเมื่อเปิด
window.onload = () => {
    const old = localStorage.getItem("webGameProject");
    if(old) project = JSON.parse(old);
    updateCanvas();
};

// ปิดการใช้งานคำสั่งดาวน์โหลด/บันทึกไฟล์ภายนอก
document.addEventListener("contextmenu", e => {
    if(e.target.tagName === "A" && e.target.hasAttribute("download")) e.preventDefault();
});
