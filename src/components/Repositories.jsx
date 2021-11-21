import React, { Fragment } from "react";

const Repositorise = ({repos}) => {
  return (
    <Fragment>
      <h3>List of repositories</h3>
      <ul>
        {repos.map(repo =>(
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Repositorise;