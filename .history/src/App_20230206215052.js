import React, { useState, useEffect } from "react";
import "./EventTable.css";

const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    // Fetch events data and set it to the state
    fetch("https://api.myevents.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredEvents =
    activeTab === "All"
      ? events
      : events.filter((event) => event.type === activeTab);

  return (
    <div className="event-table-container">
      <div className="event-types-container">
        <ul className="event-types-list">
          <li
            className={`event-types-item ${
              activeTab === "All" ? "active" : ""
            }`}
            onClick={() => handleTabClick("All")}
          >
            All
          </li>
          <li
            className={`event-types-item ${
              activeTab === "Conference" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Conference")}
          >
            Conference
          </li>
          <li
            className={`event-types-item ${
              activeTab === "Meetup" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Meetup")}
          >
            Meetup
          </li>
          <li
            className={`event-types-item ${
              activeTab === "Workshop" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Workshop")}
          >
            Workshop
          </li>
        </ul>
      </div>
      <table className="event-table">
        <thead>
          <tr>
            <th className="event-table-header">Event Name</th>
            <th className="event-table-header">Date</th>
            <th className="event-table-header">Location</th>
          </tr>
        </thead>
      </table>
      <div className="event-table-body">
        <table className="event-table">
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id} className="event-table-row">
                <td className="event-table-cell">{event.name}</td>
                <td className="event-table-cell">{event.date}</td>
                <td className="event-table-cell">{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventTable;
