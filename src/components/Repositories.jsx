import React, { Fragment } from "react";

import RepoCard from "./RepoCard.jsx";

import { Col, Row } from "react-bootstrap"

const Repositorise = ({repos}) => {
  
  return (
    <Fragment>
      <h1 className="mb-3 mt-4 text-center">Repositories</h1>
      <Row className="g-4">
        {repos.map(repo =>(
          <Col lg={6} className="d-flex justify-content-center" key={repo.id}>
            <RepoCard repo={repo}/>
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

export default Repositorise;