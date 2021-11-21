import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { EmojiNeutralFill } from "react-bootstrap-icons";

export default function ErrorDisplay(props) {
  const msg = props.message ? props.message : "Error!";
  return (
    <Fragment>
      <div className="text-center m-5">
        <EmojiNeutralFill size="10rem" />
        <h2 className="display-5">{msg}</h2>
        {props.children}
      </div>
      <Link className="d-flex justify-content-center pb-5" to="/search">Give it another try!</Link>
    </Fragment>
  );
}