require("dotenv").config();
const Openai = require("openai");


const chatgptAPI = {};

chatgptAPI.beginjudgment = async (prompt) => {
  const openai = new Openai({
    apiKey: process.env.SECRET_KEY,
  });
  try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 30,
      });
    console.log("ChatGPT Response:", response.data.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error message:", error);
    throw error; // 오류를 던져서 상위로 전달
  }
  
};
chatgptAPI.beginjudgment("hi");
module.exports = chatgptAPI;









// openai v3 버전용
// chatgptAPI.beginjudgment = async (prompt) => {
//   const configuration = new Configuration({
//     apiKey: process.env.SECRET_KEY, // 수정
//   });
//   const openai = new OpenAIApi(configuration);
//   try {
//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//     });
//     console.log("ChatGPT Response:", response.data.choices[0].message.content);
//     return response.data.choices[0].message.content;
//   } catch (error) {
//     console.error("Error message:", error);
//     throw error; // 오류를 던져서 상위로 전달
//   }
// };
