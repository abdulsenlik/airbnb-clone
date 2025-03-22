import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    console.log("Starting register endpoint...");

    if (!email || !name || !password) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("Password hashed");

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    console.log("User created:", user.id);

    return NextResponse.json(user);
  } catch (error) {
    console.error("Register error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
