export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OPENROUTER_API_KEY in env" });
  }

  const { messages } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://your-deployed-vercel-url.vercel.app", // ✅ Replace this
      },
      body: JSON.stringify({
        model: "mistral/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content: "You are Varun's AI portfolio assistant. Answer briefly and clearly.",
          },
          ...messages,
        ],
      }),
    });

    const data = await response.json();

    // ✅ Add checks and log the full response
    if (!data?.choices || !data.choices[0]?.message) {
      console.error("⚠️ OpenRouter response malformed:", JSON.stringify(data));
      return res.status(500).json({ error: "No valid AI response received." });
    }

    return res.status(200).json({ reply: data.choices[0].message });
  } catch (err) {
    console.error("🔥 Chatbot error:", err);
    return res.status(500).json({ error: "Something went wrong with OpenRouter." });
  }
}
