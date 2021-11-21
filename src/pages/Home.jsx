import React, { useState, useEffect } from "react";

import Repositorise from "../components/Repositories";
import Events from "../components/Events";
import ErrorDisplay from "../components/ErrorDisplay";
import { showRepos, showEvents } from "../service/service";

import Communicator from "../service/Communicator";

import { Col, Row, Container, Image, Spinner } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons"


const Home = (props) => {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect (() => {
    Communicator.getUserInfo().then(data => setUser(data))
    .catch((error) => {
      setError(error)})
    .finally (() => {
      setLoading(false);
    })   
  }, []);
 
  useEffect (() => {
    showRepos(user.repos_url, setRepos)
    showEvents(user.received_events_url, setEvents)
  }, [user]);


  if(loading) {
    return (
      <div className="d-flex justify-content-center pt-5 mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> 
    )
  }
  if (error) {
    return <ErrorDisplay message={error} />;
  } 
  return (
    <Container fluid>
      <Row>
        <Col lg={3} sm={6}>
          <Image className="img-fluid mt-5" src={user.avatar_url} alt="img" roundedCircle/>
          <h1 className="mt-4">{user.name}</h1>
            <h3>{user.login}</h3>
            <div className="mt-4">
              <p className="m-0 p-0"><PersonFill size="1.5rem"/> Followers: {user.followers}</p>
              <p className="m-0 p-0"><PersonFill size="1.5rem"/> Following: {user.following}</p>
            </div>
        </Col>
        <Col lg={8} sm={6} className="offset-lg-1">
          <Repositorise repos={repos} />
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <Events events={events} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;