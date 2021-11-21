import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FallbackUI.module.css";

export default function FallbackUI(props) {
  const navigate = useNavigate();
  const refreshHomePage = () => {
    navigate('/home')
    window.location.reload();
  };

  return (
    <div className={`text-center ${styles.fallback}`}>
      <h2 className="display-4 pt-5">Something went wrong...</h2>
      <div className="m-5">
        <p>An unexpected error has occurred.</p>
        <p>Sorry for the inconvenience.</p>
        <hr />
        {props.error ? (
          <p style={{ color: "red" }}>Error: {props.error}</p>
        ) : (
          <Fragment />
        )}
      </div>
      <span className={styles.refreshAction} onClick={refreshHomePage}>
        Home
      </span>
    </div>
  );
}