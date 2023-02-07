import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://my-api.com/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <table className="events-table">
      <thead>
        <tr>
          <th>Event Name</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.name}</td>
            <td>{event.date}</td>
            <td>{event.time}</td>
            <td>{event.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
