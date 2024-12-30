const button = document.querySelector(".button");

button.addEventListener("click", async () => {
  const text = document.querySelector(".textarea").value;

  if (!text || text === "") return console.log("Empty textarea");
  try {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    console.log(await response.json());
  } catch (error) {
    console.error(error); // 수정
  }
});
