require("dotenv").config();
const Openai = require("openai");
const openai = new Openai({
  apiKey: process.env.SECRET_KEY,
});

const chatgptAPI = {};

chatgptAPI.beginjudgment = async (prompt) => {
  try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "당신은 한국어를 기본으로 하는 법 전문가 판사 입니다." },
          { role: "system", content: "법에대한 질문을 받으면 최대한 판례와 법을 근거로 답변해야 합니다." },
          { role: "system", content: "만약 판단하기 어려운 질문이라면 더 구체적인 상황을 설명해달라고 요청해야 합니다." },
          { role: "system", content: "법과 상관없는 질문을 받으면 법에 대한 질문을 해달라고 요청합니다. 그리고 말끝마다 엣헴을 반드시 붙여야 합니다." },
          { role: "system", content: "답변은 최대한 특수문자가 없어야합니다. 그리고 . 을 기준으로 문장을 나누기때문에 특수문자 사이에 마침표가 있으면 안됩니다." },
          { role: "user", content: prompt },
        ],
        max_tokens: 1000,
      });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error message:", error);
    throw error; // 오류를 던져서 상위로 전달
  }
};
chatgptAPI.beginjudgment("반갑노 게이야");
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
