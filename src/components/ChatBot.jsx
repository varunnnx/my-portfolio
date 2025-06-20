import { useState } from "react";
import { motion } from "framer-motion";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Varun's AI assistant. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setLoading(true);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

const data = await res.json();

if (data?.reply) {
  setMessages([...messages, userMessage, data.reply]);
} else {
  setMessages([
    ...messages,
    userMessage,
    {
      role: "assistant",
      content: "⚠️ Sorry, something went wrong. Try again later.",
    },
  ]);
}
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-accent text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <motion.div
          className="fixed bottom-20 right-6 w-[90%] max-w-sm bg-gray-900 text-white rounded-lg shadow-2xl flex flex-col overflow-hidden z-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-4 py-2 bg-accent font-semibold">Ask Me Anything</div>
          <div className="h-80 p-4 overflow-y-auto flex flex-col gap-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg ${
                  msg.role === "user" ? "bg-accent/20 self-end" : "bg-white/10 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400 italic">Thinking...</div>}
          </div>
          <div className="flex border-t border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 px-4 py-2 bg-gray-800 text-white outline-none"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-accent px-4 text-white font-semibold"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChatBot;
