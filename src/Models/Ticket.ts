import mongoose, { Document, Model } from "mongoose";

export type SortOrder = -1 | 1;

export interface ITicket extends Document {
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  active: Boolean;
}

const ticketSchema = new mongoose.Schema<ITicket>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    priority: {
      type: Number,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Ticket: Model<ITicket> =
  mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", ticketSchema);
