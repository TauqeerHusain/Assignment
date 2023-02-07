import React, { useState } from "react";

const App = () => {
  const [events, setEvents] = useState([
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 2",
      date: "02/01/2023",
      location: "Los Angeles",
      description: "Description for event 2",
    },
    {
      name: "Event 3",
      date: "03/01/2023",
      location: "Chicago",
      description: "Description for event 3",
    },
    {
      name: "Event 4",
      date: "04/01/2023",
      location: "Houston",
      description: "Description for event 4",
    },
  ]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table style={{ width: "80%", marginTop: "50px", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "12px" }}>Name</th>
            <th style={{ padding: "12px" }}>Date</th>
            <th style={{ padding: "12px" }}>Location</th>
            <th style={{ padding: "12px" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.name} style={{ backgroundColor: "#fff" }}>
              <td style={{ padding: "12px" }}>{event.name}</td>
              <td style={{ padding: "12px" }}>{event.date}</td>
              <td style={{ padding: "12px" }}>{event.location}</td>
              <td style={{ padding: "12px" }}>{event.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
