"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ITicket } from "@/Interfaces/ITicket";

const TicketForm = () => {
  const router = useRouter()

  const ticketData: ITicket = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "Hardware",
    active: false,
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/ticket', {
      method: 'POST',
      body: JSON.stringify({formData}),
      headers: {
      "Content-Type": "application/json"
      }
    })

    if(!res.ok){
      throw new Error('No se ha creado el ticket.')
    }

    router.refresh()
    router.push('/')
  };

  const [formData, setFormData] = useState(ticketData);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Ticket:</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>

          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>

          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Not started">Not started</option>
          <option value="Started">Started</option>
          <option value="Done">Done</option>
        </select>

        <input
          type="submit"
          className="btn max-w-sm mx-auto py-2"
          value="Create ticket"
        />
      </form>
    </div>
  );
};

export default TicketForm;
