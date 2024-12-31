require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const chatgptAPI = require("./chatgpt");

const app = express();
const server = http.createServer(app);
const cors = require('cors');
app.use(cors({
    origin: process.env.URL, // 허용할 도메인
    methods: ['GET', 'POST'], // 허용할 HTTP 메서드
    credentials: true, // 인증 정보를 포함할 경우
}));
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
