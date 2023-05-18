import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => (
  <div
    className="d-flex flex-column align-items-center"
    style={{ paddingTop: "4rem", height: "100%" }}
  >
    <div className="my-auto">
      <Spinner
        animation="border"
        variant="primary"
        style={{ width: "4rem", height: "4rem" }}
      />
    </div>
    <strong className="mt-2">Cargando...</strong>
  </div>
);

export default Loading;
