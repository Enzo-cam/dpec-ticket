import { Ticket } from "@/Models/Ticket";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/db/connect";

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error at creation: ", error },
      { status: 500 }
    );
  }
}

export async function GET() {
    await dbConnect();
    
    try {
    const tickets = await Ticket.find().maxTimeMS(20000); // Aumentar a 20000 ms, por ejemplo
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error("Error al obtener tickets:", error);
    return NextResponse.json(
      {
        message: "No se pudieron traer los tickets",
        error: error.message, // Agregar detalles del error
      },
      { status: 500 }
    );
  }
}



  