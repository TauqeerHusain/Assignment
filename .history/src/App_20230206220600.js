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
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const closeTab = () => {
    setSelectedEvent(null);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "20%", padding: "20px" }}>
        <h3>Event Types</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {events.map((event) => (
            <li
              key={event.name}
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={() => setSelectedEvent(event)}
            >
              {event.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: "80%", padding: "20px" }}>
        {selectedEvent ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>{selectedEvent.name}</h3>
            <div onClick={closeTab} style={{ cursor: "pointer" }}>
              x
            </div>
            <p>Date: {selectedEvent.date}</p>
            <p>Location: {selectedEvent.location}</p>
            <p>Description: {selectedEvent.description}</p>
          </div>
        ) : (
          <h3>Please select an event from the list</h3>
        )}
      </div>
    </div>
  );
};

export default App;
