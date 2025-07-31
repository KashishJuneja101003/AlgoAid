const aiService = require("../services/ai.service");
module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Code is required");
  }

  const response = await aiService(code);

  res.send(response);
};

module.exports.geminiChat = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).send("Prompt Something");
  }
  try {
    const response = await aiService(prompt);
    res.send(response);
  } catch (error) {
    console.error("Gemini error:", error.message);
    res.status(500).send("Gemini Error: " + error.message);
  }
};
