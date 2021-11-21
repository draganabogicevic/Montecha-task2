import React, { Fragment, useState, useEffect} from "react";
import { Link } from "react-router-dom";

import ErrorDisplay from "../components/ErrorDisplay";

import { Card, Button, Image, Row, Col } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons"

import style from "./SearchedUser.module.css"

const SearchedUser = ({user, error}) => {
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)
 

  if(error) {
    return <ErrorDisplay message={error} />;
  }
  return (
    <Card>
      <Card.Body className="container-fluid">
        <Row>
          <Col lg={4}>
            <Image src={user.avatar_url} className={style.avatar} roundedCircle />
          </Col>
        </Row>  
        <Row>  
        <Card.Title>{user.name}</Card.Title>
        <Card.Title>{user.login}</Card.Title>
        <div>
          <p><PersonFill size="1.5rem"/> Followers: {user.followers}</p>
          <p><PersonFill size="1.5rem"/> Following: {user.following}</p>
        </div>
        <Link to="/">
          <Button variant="outline-dark">Home page</Button>
        </Link>
        </Row>  
      </Card.Body>
    </Card>
  )
}

export default SearchedUser;