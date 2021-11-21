import React, { Fragment } from "react";

import { formatDate } from "../helpers/helpers"

import { Table } from "react-bootstrap"

const Events = ({events}) => {
  return (
    <Fragment>
      <h3 className="mt-5">List of resent activities</h3>
      <Table responsive striped bordered hover className="pb-5">
        <thead>
          <tr>
            <th>Event</th>
            <th>Repo name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="pb-5">
        {events.map(event =>(
        <tr key={event.id}>
          <td>{event.type}</td>
          <td>{event.repo.name}</td>
          <td>{formatDate(event.created_at)}</td>
        </tr>  
        ))}
        </tbody>
      </Table>
    </Fragment>
  )
}

export default Events;