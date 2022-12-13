import React from "react";
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="text-center m-auto">
      <h1 className="m-10 text-4xl">404</h1>
      <p className="m-10 text-2xl">Page not found</p>
      <p className="m-10 text-2xl">{error.statusText || error.message}</p>
      <Link
        to="/"
      >
      <button className="btn btn-outline btn-error">Volver al Inicio</button>
      </Link>
    </div>
  );
};

export default NotFound;
