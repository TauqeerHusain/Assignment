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
      name: "Event 5",
      date: "01/02/2023",
      location: "India",
      description: "Description for event 5",
    },
    {
      name: "Event 6",
      date: "01/08/2023",
      location: "Pakistan",
      description: "Description for event 6",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 7",
    },
    {
      name: "Event 8",
      date: "06/01/2023",
      location: "New York",
      description: "Description for event 8",
    },
    {
      name: "Event 9",
      date: "09/01/2023",
      location: "New York",
      description: "Description for event 9",
    },
    {
      name: "Event 10",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 10",
    },
    {
      name: "Event 11",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 11",
    },
    {
      name: "Event 12",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 12",
    },
    {
      name: "Event 13",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 13",
    },
    {
      name: "Event 14",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 14",
    },
    {
      name: "Event 1",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 1",
    },
    {
      name: "Event 15",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 15",
    },
    {
      name: "Event 16",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 16",
    },
    {
      name: "Event 17",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 17",
    },
    {
      name: "Event 18",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 18",
    },
    {
      name: "Event 19",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 19",
    },
    {
      name: "Event 20",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 20",
    },
    {
      name: "Event 21",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 21",
    },
    {
      name: "Event 22",
      date: "01/01/2023",
      location: "New York",
      description: "Description for event 22",
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
