import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("OPENAI_API_KEY is not defined in the environment variables");
}

const openai = new OpenAI({
  apiKey: apiKey,
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { message: "Message is required in the request body." },
        { status: 400 }
      );
    }

    const messages: Array<{
      role: "system" | "user" | "assistant";
      content: string;
    }> = [
      {
        role: "system",
        content:
          "You are an AI assistant designed specifically for Fatima Nazeer. " +
          "Your expertise focuses on providing thoughtful, detailed, and professional guidance in web development and business administration. " +
          "Fatima Nazeer specializes in modern web technologies, including HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js, and Node.js, " +
          "and has a keen interest in leveraging these tools for business innovation and strategic growth. " +
          "If someone asks how to connect or contact Fatima, respond with: 'You can reach Fatima through her contact page at https://my-profile-website-one.vercel.app/contact.' " +
          "Ensure all responses align with her professional tone and style and reflect the content and themes presented on her portfolio website.",
      },
      {
        role: "user",
        content: message,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const content = response.choices[0]?.message?.content || "No response generated.";

    return NextResponse.json({ message: content });
  } catch (error: unknown) {
    console.error("API Error:", error);

    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { message: "OpenAI API error: " + error.message },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      {
        message: error instanceof Error
          ? error.message
          : "An unknown error occurred while generating a response.",
      },
      { status: 500 }
    );
  }
}
