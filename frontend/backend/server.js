const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 Frontend ka folder path (../frontend)
const frontendPath = path.join(__dirname, "..", "frontend");

// Static files serve karo (CSS, JS, etc.)
app.use(express.static(frontendPath));

// Root pe index.html bhejo
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// API route
app.post("/api/register", (req, res) => {
  const { name, email, branch } = req.body;
  console.log("New Registration:", name, email, branch);

  res.json({
    success: true,
    message: "Registration successful!",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});