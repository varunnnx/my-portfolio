export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OPENROUTER_API_KEY in env" });
  }

  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Invalid messages array" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://your-portfolio-site.vercel.app", // ✅ replace with your domain
      },
      body: JSON.stringify({
        model: "mistral/mistral-7b-instruct", // other options: "meta-llama/llama-3-8b-instruct", etc.
        messages: [
          {
            role: "system",
            content: "You are Varun's AI portfolio guide. Answer briefly, clearly, and helpfully.",
          },
          ...messages,
        ],
      }),
    });

    const data = await response.json();

    if (!data?.choices?.[0]?.message) {
      throw new Error("No valid message in OpenRouter response");
    }

    return res.status(200).json({ reply: data.choices[0].message });
  } catch (error) {
    console.error("Chatbot error:", error);
    return res.status(500).json({ error: "Chatbot failed. Please try again later." });
  }
}
