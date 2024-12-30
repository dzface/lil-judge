const messageBox = document.querySelector(".message-box");
const judgement = document.querySelector(".judgement");
const button = document.querySelector(".button");

button.addEventListener("click", async () => {
  const text = document.querySelector(".textarea").value;
  if (!text || text === "") return console.log("Empty text");
  const div = document.createElement("div");
  div.textContent = text;
  div.className = "question";
  messageBox.appendChild(div);
  try {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const result = await response.json();
    const div = document.createElement("div");
    div.textContent = result.response;
    div.className = "judgement";
    messageBox.appendChild(div);
    text.textContent = "";
  } catch (error) {
    console.error(error); // 수정
  }
});

