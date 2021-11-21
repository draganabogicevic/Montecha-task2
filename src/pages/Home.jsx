import React, { useState, useEffect } from "react";

import Repositorise from "../components/Repositories";
import Events from "../components/Events";
import ErrorDisplay from "../components/ErrorDisplay";

import Communicator from "../service/Communicator";

import { Col, Row, Container, Image, Spinner } from "react-bootstrap";


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
 
  
  const showRepos = () => {
    fetch(user.repos_url)
    .then (respons => respons.json())
    .then(data => setRepos(data))
  }

  const showEvents = () => {
    fetch(user.received_events_url)
    .then (respons => respons.json())
    .then(data => setEvents(data))
  }
  

  useEffect (() => {
    showRepos()
    showEvents()
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
        <Col lg={5}>
          <Image className="img-fluid" src={user.avatar_url} alt="img" roundedCircle/>
        </Col>
        <Col lg={3}>
          <Repositorise repos={repos} />
        </Col>
        <Col lg={3}>
          <Events events={events} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;