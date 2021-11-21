import React, { Fragment, useState, useEffect} from "react";
import { Link } from "react-router-dom";

import ErrorDisplay from "../components/ErrorDisplay";
import Repositorise from "../components/Repositories";
import Events from "../components/Events";
import { showRepos, showEvents } from "../service/service";

import { Card, Button, Image, Row, Col } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons"

import style from "./SearchedUser.module.css"

const SearchedUser = ({user, error}) => {
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)
 
  useEffect (() => {
    showRepos(user.repos_url, setRepos)
    showEvents(user.received_events_url, setEvents)
  }, [user]);

  if(error) {
    return <ErrorDisplay message={error} />;
  }
  return (
    <Card>
      <Card.Body className="container-fluid">
        <Row>
          <Col lg={3} sm={6}>
            <Image src={user.avatar_url} className={`mt-5 ms-5 ${style.avatar}`}roundedCircle />
            <h3 className="mt-4">{user.name}</h3>
            <Card.Title>{user.login}</Card.Title>
            <div className="mt-4">
              <p className="m-0 p-0"><PersonFill size="1.5rem"/> Followers: {user.followers}</p>
              <p className="m-0 p-0"><PersonFill size="1.5rem"/> Following: {user.following}</p>
            </div>
          </Col>
          <Col lg={8} sm={6}>
            <Repositorise repos={repos} />
          </Col>
        </Row>  
        <Row>  
          <Col>
            <Events events={events} />
          </Col>
        <Link to="/">
          <Button className="mb-5" variant="outline-dark">Home page</Button>
        </Link>
        </Row>  
      </Card.Body>
    </Card>
  )
}

export default SearchedUser;