import React from "react";

import { formatDate } from "../helpers/helpers";

import style from "./RepoCard.module.css"
import { Card } from "react-bootstrap";

const RepoCard = ({repo}) => {
  return (
      <Card className={`h-100 w-100 ${style.repos}`}>
        <Card.Body>
          <Card.Title>Repo name: {repo.name}</Card.Title>
          <p>Language: {repo.language}</p>
          <p>Created: {formatDate(repo.created_at)}</p>
        </Card.Body>
      </Card>
  )
}

export default RepoCard;