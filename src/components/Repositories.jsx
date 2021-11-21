import React, { Fragment } from "react";

import { Col, Row } from "react-bootstrap"

import style from "./Repositories.module.css"

const Repositorise = ({repos}) => {
  
  return (
    <Fragment>
      <h1 className="mb-3 mt-4 text-center">Repositories</h1>
      <Row>
        {repos.map(repo =>(
          <Col lg={6} className="d-flex justify-content-center" key={repo.id}>
            <div className={`m-2 ${style.divForRepos}`} key={repo.id}>{repo.name}</div>
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

export default Repositorise;