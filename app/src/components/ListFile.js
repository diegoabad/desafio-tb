import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ListFile = ({list}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Muestra Lista Archivos
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {list.map(item=> <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ListFile;