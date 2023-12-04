export type TicketStatus = 'Not started' | 'Started' | 'Done';

export interface ITicket {
    _id: string;
    createdAt: string;
    title: string;
    description: string;
    category: string;
    priority: number;
    progress: number;
    status: TicketStatus; 
    active: Boolean;
  }