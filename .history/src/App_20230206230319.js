import React, { useState } from "react";

const events = [
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
    name: "Event 7",
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
  {
    name: "Event 23",
    date: "01/01/2023",
    location: "New York",
    description: "Description for event 23",
  },
];

const App = () => {
  const [openTabs, setOpenTabs] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCloseTab = () => {
    setSelectedEvent(null);
  };

  const tabChangeHandler = (name) => {
    if (selectedEvent && selectedEvent.name === name) return;
    const data = events.filter((item) => item.name === name);
    setSelectedEvent(data.pop());
  };

  const closeTabHandler = (eventName) => {};

  return (
    <>
      <nav>
        <div
          style={{
            paddingLeft: 200,
            height: 80,
            background: "gray",
            display: "flex",
            columnGap: 30,
            alignItems: "center",
          }}
        >
          {openTabs.map((item) => (
            <div
              style={{
                backgroundColor: "#ccc",
                padding: "3px 10px",
                borderRadius: 5,
              }}
            >
              <button
                style={{
                  height: 25,
                  background: "transparent",
                  border: 0,
                  margin: 0,
                  cursor: "pointer",
                }}
                onClick={() => {
                  tabChangeHandler(item);
                }}
              >
                {item}
              </button>
              <span onClick={() => closeTabHandler(item)}>X</span>
            </div>
          ))}
        </div>
      </nav>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%", padding: "20px" }}>
          <h3>Event Types</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {events.map((event) => (
              <li
                key={event.name}
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => {
                  if (!openTabs.includes(event.name)) {
                    setOpenTabs((prev) =>
                      prev.length > 0 ? [...prev, event.name] : [event.name]
                    );
                  }
                  setSelectedEvent(event);
                }}
              >
                {event.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedEvent && (
          <div style={{ width: "80%", padding: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>{selectedEvent.name}</h3>
              <div
                style={{
                  display: "inline-block",
                  padding: "10px",
                  backgroundColor: "lightgray",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={handleCloseTab}
                onMouseEnter={() => {
                  console.log("Mouse entered");
                }}
                onMouseLeave={() => {
                  console.log("Mouse left");
                }}
              >
                x
              </div>
            </div>
            <p>Date: {selectedEvent.date}</p>
            <p>Location: {selectedEvent.location}</p>
            <p>Description: {selectedEvent.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
