import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, content } = await request.json();

    // Her kan du gemme til database eller sende email
    console.log("Ny besked:", { name, email, content });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Fejl" }, { status: 500 });
  }
}
