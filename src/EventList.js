import React from 'react'

function EventList({ events }) {
  return (
    <div className="event-list" id="events">
      {events.map((event) => (
        <div className="event-card" key={event.id}>
          <h2>{event.name}</h2>

          <p><b>College:</b> {event.college}</p>
          <p><b>Department:</b> {event.department}</p>
          <p><b>Date:</b> {event.date}</p>
          <p><b>Technical Track:</b> {event.track}</p>

          <a
            className="register"
            href={event.link}
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>
        </div>
      ))}
    </div>
  );
}

export default EventList;