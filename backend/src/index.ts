import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from Express + TS!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});