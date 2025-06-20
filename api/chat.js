import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // Method check
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Environment variable check
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY is missing in environment variables." });
  }

  // Request body validation
  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Invalid or missing 'messages' array in request body." });
  }

  try {
    // OpenAI chat completion request
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // You can change this to "gpt-4" if you have access
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant for Varun Nagpal’s portfolio.",
        },
        ...messages,
      ],
    });

    const reply = completion.choices?.[0]?.message;
    if (!reply) {
      throw new Error("OpenAI response did not contain a valid reply.");
    }

    // Success
    return res.status(200).json({ reply });
  } catch (error) {
    // Structured logging
    console.error("Chatbot error:", error.response?.data || error.message || error);

    // OpenAI specific error
    if (error.response?.status === 429) {
      return res.status(429).json({ error: "Rate limit exceeded. Please check your API usage." });
    }

    // General error
    return res.status(500).json({ error: "Something went wrong while communicating with OpenAI." });
  }
}
