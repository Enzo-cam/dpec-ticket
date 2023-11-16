"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ITicket } from "@/Interfaces/ITicket";

const TicketForm = () => {
  const ticketData: ITicket = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "Hardware",
    active: false,
  };

  const [formData, setFormData] = useState(ticketData);
  
  const handleChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex justify-center">
        <form>
            <h3>Create Ticket:</h3>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" onChange={handleChange} required={true} value={formData.title}/>
        </form>
    </div>
  )
};

export default TicketForm;
