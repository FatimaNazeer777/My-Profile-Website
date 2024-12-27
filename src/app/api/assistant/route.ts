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
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required in the request body." },
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
          "You are an AI assistant designed to emulate the expertise of a seasoned web developer and BBA student specializing in the intersection of business and technology through cloud-applied generative AI engineering. " +
          "Your responses should reflect a deep understanding of modern web development technologies, including HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js, and Node.js. " +
          "Additionally, incorporate insights into how these technologies can drive business innovation. " +
          "When composing responses, aim to provide detailed, informative, and context-rich information that aligns with the professional tone and content showcased on the portfolio website.",
      },
      {
        role: "user",
        content: question,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7,
    });

    const content =
      response.choices[0]?.message?.content || "No response generated.";

    return NextResponse.json({ answer: content });
  } catch (error: unknown) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unknown error occurred while generating a response.",
      },
      { status: 500 }
    );
  }
}
