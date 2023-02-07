import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {}, []);

  return (
    <table className="events-table">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Event 1</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
