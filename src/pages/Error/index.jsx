import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  // écrire le code ici
  return (
    <div>
      <h1>Error 404</h1>
      <p>Not Found</p>
      <div>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default Error;
