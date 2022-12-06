import React from "react";
import { Link } from "react-router-dom";
import "../../styles/main.scss";

const Error = () => {
  return (
    <div className="error_container">
      <h1 className="error_container__title">Error 404</h1>
      <p className="error_container__title__para">Page Not Found</p>
      <div className="link_bloc error_container__link">
        <Link to="/" ari-label="Back to home">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
