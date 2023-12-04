import { Ticket } from "@/Models/Ticket";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/db/connect";

export async function DELETE(req: NextRequest, {params}) {
    await dbConnect();
  
    try {
      const { id } = params; // Getting id from query
      await Ticket.findByIdAndDelete(id);
      return NextResponse.json({ message: "Ticket borrado." }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "No se pudo borrar el ticket: ", error },
        { status: 500 }
      );
    }
  }