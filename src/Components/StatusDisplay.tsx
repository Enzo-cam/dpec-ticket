import { TicketStatus } from "@/Interfaces/ITicket";

type StatusProps = {
  status: TicketStatus;
};

const StatusDisplay: React.FC<StatusProps> = ({status}) => {
  return (
    <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-300">
        Done
    </span>
  )
}

export default StatusDisplay