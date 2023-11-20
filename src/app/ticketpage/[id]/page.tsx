import TicketForm from "@/Components/TicketForm";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const TicketPage = ({ params }: Params) => {
  return <TicketForm />;
};

export default TicketPage;
