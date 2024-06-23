import express from "express";

const app = express();
const port = 3000;

// API Endpoint สำหรับดูข้อมูลโปรไฟล์ของ John
app.get("/profiles", (req, res) => {
  res.status(200).json({
    data: [
      {
        name: "john",
        age: 20,
      },
      {
        name: "jane",
        age: 20,
      },
    ],
  });
});

// เริ่มต้น Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
