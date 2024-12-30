require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const chatgptAPI = require("./chatgpt");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.post("/api", async (req, res) => {
  console.dir(req.body);

  try {
    const response = await chatgptAPI.beginjudgment(req.body.text); // 수정
    res.status(200).json({ status: "ok", response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

server.listen(3000, () => {
  console.log(`server start`);
});
