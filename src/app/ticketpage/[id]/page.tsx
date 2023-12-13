import TicketForm from "@/Components/TicketForm";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const getTicket = async(id: string) => {
  const res = await fetch(`http://localhost:3000/api/ticket/${id}`, {
    cache: 'no-store'
  })

  if(!res.ok){
    throw new Error('Fallo al obtener el ticket.')
  }
  console.log(res.json)
  return res.json()
}

const TicketPage = async ({ params }: Params) => {

  const editMode = params.id === 'new' ? false : true;
  let ticketData = {}

  if(editMode){
    ticketData = await getTicket(params.id)
  }else{
    ticketData = {
      _id: 'new'
    }
  }

  return <TicketForm ticket={ticketData} />;
};

export default TicketPage;
