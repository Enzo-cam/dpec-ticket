"use client"
import {useState, useEffect} from 'react'
import TicketCard from "@/Components/TicketCard";
import { ITicket } from "@/Interfaces/ITicket";

const getTickets = async (): Promise<ITicket[] | undefined> => {
  try {
    const res = await fetch("/api/ticket", {
      cache: "no-store",
    });
    const data = await res.json();
    return data.tickets;
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


  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log("Probando" + tickets)
  console.log(tickets)

  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {
          tickets && uniqueCategories?.map((uniqCategory, catIndex) => (
            <div key={catIndex} className='mb-4'>
              <h2>{uniqCategory}</h2>
              <div>
                {tickets.filter((ticket) => ticket.category === uniqCategory).map((filterTicket, _index) => (
                  <TicketCard 
                    // id={_index}
                    key={_index}
                    ticket={filterTicket}
                  />
                ))}
              </div>
            </div>
          ))
        }
        {/* <TicketCard />
        <TicketCard /> */}
      </div>
    </div>
  );
};

export default Home;
