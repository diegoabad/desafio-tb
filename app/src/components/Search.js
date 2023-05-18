import { Form, Row, Col, Button } from "react-bootstrap";

const Search = ({search,reset,searchValue,setSearchValue}) => {

  const isInputEmpty = searchValue.trim() === "";

  return (
    <div className="d-flex justify-content-center">
      <div className="search-container" style={{ width: "50%" }}>
        <Form style={{ padding: "20px" }}>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={8}>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del archivo..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Col>
            <Col xs={2} className="text-center">
              <Button
                variant="primary"
                onClick={search}
                disabled={isInputEmpty}
              >
                Buscar
              </Button>
            </Col>
            <Col xs={2} className="text-center">
              <Button
                variant="secondary"
                onClick={reset}
                disabled={isInputEmpty}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Search;
