import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import ErrorDisplay from "../components/ErrorDisplay";

import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { Search, X } from "react-bootstrap-icons";

const SearchPage = (props) => {
  const [ searchText, setSearchText ] = useState("");
  
  const handleChange = (inputText) => {
    props.onSearch(inputText);
    setSearchText(inputText);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  const clearInput = () => {
    setSearchText("");
    handleChange("");
  }

  if(props.error) {
    return <ErrorDisplay message={props.error} />;
  }
  

  return (
    <Fragment>
      <Form className="d-flex m-5 p-5 text-center" onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text className="bg-dark text-light" style={{cursor: "pointer"}}>
            <Search size="1rem"/>
          </InputGroup.Text>
          <FormControl
            value={searchText}
            type="text"
            aria-label="Search"
            onChange={e => handleChange(e.target.value)}
          />
          <InputGroup.Text className="bg-dark text-light me-3" onClick={clearInput} style={{cursor: "pointer"}}>
            <X size="1rem" />
          </InputGroup.Text>
        </InputGroup>
        <Button variant="outline-dark" onClick={props.searchUser}>
          <Link to={"/search:" + props.user.id}>Search</Link>
        </Button>
      </Form>
    </Fragment>  
  )
}

export default SearchPage;