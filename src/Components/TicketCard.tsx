import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import { ITicket } from "@/Interfaces/ITicket";
import { formatISODate } from "@/helpers/constants";

type TicketCardProps = {
  ticket: ITicket;
  deleteTicket: (id: string) => void;
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket, deleteTicket }) => {
  return (
    <Link href={`/ticketpage/${ticket._id}`} style={{ display: "contents" }}>
      <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
        <div className="flex items-center mb-1">
          <PriorityDisplay priority={ticket.priority} />
          <div className="ml-auto">
            <button onClick={() => deleteTicket(ticket._id)}>
              <DeleteBlock />
            </button>
          </div>
        </div>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatISODate(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </div>
    </Link>
  );
};


export default TicketCard;
