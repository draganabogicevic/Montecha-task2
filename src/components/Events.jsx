import React, { Fragment } from "react";

const Events = ({events}) => {
  return (
    <Fragment>
      <h3>List of resent activities</h3>
        <ul>
          {events.slice(0, 15).map(event =>(
            <li key={event.id}>{event.type} on {event.repo.name}</li>
          ))}
        </ul>
    </Fragment>
  )
}

export default Events;