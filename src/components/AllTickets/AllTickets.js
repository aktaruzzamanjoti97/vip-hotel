import React, { useEffect, useState } from "react";
import "./AllTickets.css";
import fakeData from "../../fakeData.json";
import TicketCard from "../TicketCard/TicketCard";

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    console.log(fakeData);
    setTickets(fakeData);
  }, []);

  return (
    <div className="all-tickets">
      <div className="row ticket-style">
        {tickets.map((ticket) => (
          <TicketCard ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default AllTickets;
