import { NextResponse } from "next/server";
import connectToMongoDb from "@/lib/mongoDb";
import Todo from "@/models/todoSchema";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectToMongoDb();
  await Todo.create({ title, description });
  return NextResponse.json({ message: "Todo created" }, { status: 201 });
}

export async function GET() {
  await connectToMongoDb();
  const todos = await Todo.find();
  return NextResponse.json({
    todos,
  });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectToMongoDb();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
