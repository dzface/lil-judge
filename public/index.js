const messageBox = document.querySelector(".message-box");
const judgement = document.querySelector(".judgement");
const button = document.querySelector(".button");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");

modalButton.addEventListener("click", () => {
  modal.style.display = "none";
});
button.addEventListener("click", async () => {
  const textarea = document.querySelector(".textarea");
  const text = textarea.value;
  if (!text || text === "") return console.log("Empty text");
  const userDiv = document.createElement("div");
  userDiv.className = "question";
  userDiv.innerHTML = text;
  messageBox.appendChild(userDiv);
  //console.log(text);
  textarea.value = ""; //입력값 초기화
  messageBox.scrollTo(0, messageBox.scrollHeight); // 스크롤 아래로 이동
  try {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const result = await response.json();
    console.log(result);
    const responseDiv = document.createElement("div");
    responseDiv.className = "judgement";
    messageBox.appendChild(responseDiv);
    typingAnimation(result.response, responseDiv);
    
  } catch (error) {
    console.error(error); // 수정
  }
});

function typingAnimation(text, htmlElement, index = 0) {
  if (index < text.length) {
    htmlElement.innerHTML += text.charAt(index)=="." ? text.charAt(index)+"<br>" : text.charAt(index);
    setTimeout(() => typingAnimation(text, htmlElement, ++index), 20);
  };
  messageBox.scrollTo(0, messageBox.scrollHeight); // 스크롤 아래로 이동
};