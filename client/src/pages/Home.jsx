import React, { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";
import axios from "axios";
import Markdown from "react-markdown";

const Home = () => {
  const [code, setCode] = useState("");
  const [Feedback, setFeedback] = useState(``);
  const [Complexity, setComplexity] = useState(``);
  const [Optimization, setOptimization] = useState(``);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const formatResponse = (text) => text.replace(/<br\s*\/?>/gi, "\n");

  async function getFeedback(type) {
    let instruction = "";

    if (type === "feedback") {
      instruction =
        "Evaluate the given DSA code based on correctness, code style, readability, cleanliness, and use of comments with a brief explanation.";
    } else if (type === "complexity") {
      instruction =
        "Analyze the time and space complexity of the following code with a brief explanation.";
    } else if (type === "optimization") {
      instruction =
        "Suggest possible optimizations to improve the efficiency of this code in terms of time and space with a brief explanation.";
    }

    const prompt = `${instruction}\n\n${code}`;
    const response = await axios.post(
      "https://algoaid.onrender.com/ai/get-review",
      {
        code: prompt,
      }
    );

    console.log(response.data);

    if (type === "feedback") setFeedback(formatResponse(response.data));
    else if (type === "complexity")
      setComplexity(formatResponse(response.data));
    else if (type === "optimization")
      setOptimization(formatResponse(response.data));
  }

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    try {
      const response = await axios.post(
        "https://algoaid.onrender.com/ai/gemini-chat",
        {
          prompt: input,
        }
      );

      const botMessage = { role: "bot", text: formatResponse(response.data) };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error: " + error.message },
      ]);
    }

    setTimeout(() => {
      const container = document.getElementById("chat-container");
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 100); // Slight delay to let new message render
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold text-white text-center mb-0">
        AlgoAid
      </h1>
      <div className="mt-3 space-y-3 md:flex gap-5">
        <CodeEditor code={code} setCode={setCode} />

        {/* <div className="bg-[#1F2937] border-2 p-2 text-white rounded-2xl border-white w-[40%]">
          <div className="ali">
            <h2 className="text-lg font-semibold text-slate-50 mb-2">Chat with Gemini</h2>
          </div>
          <hr />
        </div> */}

        <div className="p-4 max-h-[400px] rounded-2xl md:w-[38%] bg-slate-100 ">
          <div
            id="chat-container"
            className="mb-4 h-[300px] overflow-scroll scrollbar-hidden bg-white p-4 rounded shadow"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.role === "user"
                    ? "text-right text-blue-700"
                    : "text-left text-green-700"
                }`}
              >
                <p
                  className={`inline-block max-w-[85%] break-words p-2 rounded overflow-auto ${
                    msg.role === "user"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  <Markdown
                    components={{
                      pre: ({ node, ...props }) => (
                        <pre className="overflow-x-auto  bg-gray-800 text-white p-2 rounded my-2 text-sm">
                          <code {...props} />
                        </pre>
                      ),
                    }}
                  >
                    {msg.text}
                  </Markdown>
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              className="flex-grow border p-2 rounded-l"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask Gemini something..."
            />
            <button
              className="bg-blue-600 active:scale-90 cursor-pointer text-white px-4 rounded-xl"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="flex mt-3 gap-5 justify-between">
        {/* Response */}
        <div className="bg-[#1D3235] w-[33%] rounded-2xl p-2 border-2 border-green-800 gap-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-slate-50 mb-2">
              Feedback
            </h2>
            <button
              onClick={() => getFeedback("feedback")}
              className="bg-emerald-500 active:scale-90 text-white mb-1.5 cursor-pointer rounded-2xl px-2"
            >
              Get Feedback
            </button>
          </div>
          <hr style={{ color: "green" }} />
          <div className="mt-2 max-h-100 overflow-auto scrollbar-hidden text-gray-300">
            <Markdown>{Feedback}</Markdown>
          </div>
        </div>

        {/* Complexity Analysis */}

        <div className="bg-[#1F2D48] w-[33%] rounded-2xl p-2 border-2 border-sky-800 gap-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-slate-50 mb-2">
              Analyse Complexity
            </h2>
            <button
              onClick={() => getFeedback("complexity")}
              className="bg-sky-500 active:scale-90 text-white mb-1.5 cursor-pointer rounded-2xl px-2"
            >
              Analyse
            </button>
          </div>
          <hr style={{ color: "skyblue" }} />
          <div className="mt-2 max-h-100 overflow-auto scrollbar-hidden  text-gray-300">
            <Markdown>{Complexity}</Markdown>
          </div>
        </div>

        {/* Optimization */}

        <div className="bg-[#232A46] w-[33%] rounded-2xl p-2 border-2 border-purple-800 gap-2">
          <div className="flex justify-between">
            <h2 className="text-lg text-slate-50 font-semibold mb-2">
              Optimization
            </h2>
            <button
              onClick={() => getFeedback("optimization")}
              className="bg-purple-500 active:scale-90 text-white mb-1.5 cursor-pointer rounded-2xl px-2"
            >
              Optimise
            </button>
          </div>
          <hr style={{ color: "purple" }} />
          <div className="mt-2 max-h-100 overflow-auto scrollbar-hidden  text-gray-300">
            <Markdown>{Optimization}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
