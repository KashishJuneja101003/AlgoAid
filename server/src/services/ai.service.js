// import { GoogleGenAI } from "@google/genai";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction:`Analyze the code like you're an experienced developer to make me ready for big-tech company's interviews.
    Provide the feedback neat and clean with proper spacing with emoticons.
    Separate each section with lines and give extra newlines before starting new section. 
    Bold heading of new section. 
    Send the markdown response.
    Don't send response in tabular format.
    Your response should be crisp and clear and yet friendly`,
})


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    console.log(result.response.text())

    return result.response.text();

}

module.exports = generateContent    