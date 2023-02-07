import React, { useState } from "react";

const events = [
  {
    name: "Event 1",
    id: 1,
  },
  {
    name: "Event 2",
    id: 2,
  },
  {
    name: "Event 3",
    id: 3,
  },
  {
    name: "Event 4",
    id: 4,
  },
  {
    name: "Event 5",
    id: 5,
  },
  {
    name: "Event 6",
    id: 6,
  },
  {
    name: "Event 7",
    id: 7,
  },
  {
    name: "Event 8",
    id: 8,
  },
  {
    name: "Event 9",
    id: 9,
  },
  {
    name: "Event 10",
    id: 10,
  },
  {
    name: "Event 11",
    id: 11,
  },
  {
    name: "Event 12",
    id: 12,
  },
  {
    name: "Event 13",
    id: 13,
  },
  {
    name: "Event 14",
    id: 14,
  },
  {
    name: "Event 15",
    id: 15,
  },
  {
    name: "Event 16",
    id: 16,
  },
  {
    name: "Event 17",
    id: 17,
  },
  {
    name: "Event 18",
    id: 18,
  },
  {
    name: "Event 19",
    id: 19,
  },
  {
    name: "Event 20",
    id: 20,
  },
  {
    name: "Event 21",
    id: 21,
  },
  {
    name: "Event 22",
    id: 22,
  },
  {
    name: "Event 23",
    id: 23,
  },
];

const allSingleEventData = {
  1: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  3: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
  2: [
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
    { timestamp: "02/1023/20", id: 1613468, raw: "tesjcljsefjls" },
  ],
};

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
    console.log("2eadasd");
  };

  const closeTabHandler = (eventName) => {
    const updatedTabs = openTabs.filter((item) => item !== eventName);

    setSelectedEvent(null);
    setOpenTabs(updatedTabs);
  };

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
              key={item}
              style={{
                backgroundColor: selectedEvent
                  ? selectedEvent.name === item
                    ? "skyblue"
                    : "#ccc"
                  : "#ccc",
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
              <span
                style={{ cursor: "pointer" }}
                onClick={() => closeTabHandler(item)}
              >
                X
              </span>
            </div>
          ))}
        </div>
      </nav>
      <div style={{ display: "flex" }}>
        <div style={{ width: "15%", padding: "20px" }}>
          <h3>Event Types</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {events.map((event) => (
              <li
                key={event.name}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor: selectedEvent
                    ? selectedEvent.id === event.id
                      ? "skyblue"
                      : "#ccc"
                    : "#ccc",
                  border: "1px solid #545454",
                }}
                onClick={() => {
                  if (!openTabs.includes(event.name)) {
                    setOpenTabs((prev) =>
                      prev.length > 0 ? [...prev, event.id] : [event.id]
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
        <div></div>
        {/* {selectedEvent && (
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
        )} */}
      </div>
    </>
  );
};

export default App;
