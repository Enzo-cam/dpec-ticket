import { Ticket } from "@/Models/Ticket";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/db/connect";

export async function POST(req: NextRequest){
    
    await dbConnect()

    try {
        const body = await req.json()
        const ticketData = body.formData
        await Ticket.create(ticketData)

        return NextResponse.json({message: 'Ticket created'}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Error at creation: ', error}, {status: 500})
    }
}