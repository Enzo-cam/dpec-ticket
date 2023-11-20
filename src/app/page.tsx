"use client"
import {useState, useEffect} from 'react'
import TicketCard from "@/Components/TicketCard";
import { ITicket } from "@/Interfaces/ITicket";

const getTickets = async (): Promise<ITicket[] | undefined> => {
  try {
    const res = await fetch("/api/ticket", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Fallo en obtener los tickets: ", error);
  }
};

const Home = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const fetchedTickets = await getTickets();
      if (fetchedTickets) {
        setTickets(fetchedTickets);
      }
    };

    fetchTickets();
  }, []);


  // const uniqueCategories = [
  //   ...new Set(tickets?.map(({ category }) => category)),
  // ];

  console.log("Probando")
  console.log(tickets)

  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />

        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Home;
