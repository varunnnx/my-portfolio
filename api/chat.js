import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY is missing in environment variables." });
  }

  const { messages } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant for Varun Nagpal’s portfolio.",
        },
        ...messages,
      ],
    });

    const reply = completion.choices[0].message;
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Chatbot error:", error.response?.data || error.message || error);
    res.status(500).json({ error: "Something went wrong with OpenAI API." });
  }
}
