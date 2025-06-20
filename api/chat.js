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
        "HTTP-Referer": "https://my-portfolio-varuns-projects-194bb1fd.vercel.app/", // ✅ Your actual deployed site
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
You are an intelligent AI assistant embedded in Varun Nagpal’s personal portfolio website. Your role is to help visitors learn more about Varun’s skills, projects, experience, and goals.

Varun Nagpal is a final-year Information Technology student at K.J. Somaiya College of Engineering with an Honours in Artificial Intelligence and Machine Learning (AIML). He has completed multiple internships in areas including full-stack development, data analysis, and software engineering.

Varun has worked on various technical projects such as:
- Khana Khazana – a PHP-based blog platform with OTP authentication and CRUD functionality.
- Little Lemon – a Django-powered restaurant site.
- NGO Management Website – a dynamic site for social work and event management.
- Snap Shot – a responsive React image gallery using Flickr API.

He is proficient in frontend (React, Tailwind CSS, JavaScript), backend (Django, Flask, Node.js, PHP), and databases (MySQL, PostgreSQL, SQLite, MongoDB). He also has knowledge of Python, machine learning, deep learning, and tools like Git, VS Code, Postman, and Power BI.

Varun is actively looking for full-time roles and internships in software development, AI/ML, or data engineering.

Always answer questions truthfully, concisely, and with a helpful tone. If something is unclear, ask the user to clarify.`
          },
          ...messages
        ]
      }),
    });

    const data = await response.json();

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
