import { Ticket } from "@/Models/Ticket";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/db/connect";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function GET(req: NextRequest, {params} : Params){
  await dbConnect();
  try {
    const {id} = params;
    const ticket = await Ticket.findById(id); // Solo pasar `id`
    return NextResponse.json({ticket}, {status: 200})
  } catch (error) {
    return NextResponse.json(
        { message: "No se pudo encontrar el ticket: ", error },
        { status: 404 }
      );
  }
}


export async function DELETE(req: NextRequest, {params}: Params) {
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