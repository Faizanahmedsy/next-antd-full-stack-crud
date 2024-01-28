import connectToMongoDb from "@/lib/mongoDb";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await connectToMongoDb();
  await Todo.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectToMongoDb();
  const todos = await Todo.findOne({ _id: id });
  return NextResponse.json({ todos }, { status: 200 });
}
