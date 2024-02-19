import mongoose from "mongoose";
import { NextResponse } from "next/server";
// import User from "../models/Users";
import { User } from "../models/Users";
import connectMongoDB from "../lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectMongoDB();
    await User.create({ email, password });
    console.log("Database connected");
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while registering the user" },
      { status: 500 }
    );
  }
}
