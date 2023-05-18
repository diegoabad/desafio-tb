import React from "react";
import { Card } from "react-bootstrap";
import ListFile from "./ListFile";

const Header = ({ title, list }) => (
  <Card bg="danger" text="white" className="rounded-0">
    <Card.Body className="d-flex align-items-center justify-content-between px-4">
      <Card.Title className="font-weight-bold" style={{ fontSize: "1.5rem" }}>
        {title}
      </Card.Title>
      <div className="ml-auto">
        <ListFile list={list} />
      </div>
    </Card.Body>
  </Card>
);

export default Header;
