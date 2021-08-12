import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Container,
  Col,
  FloatingLabel,
  Row,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../Context/useContext";
import { useContext } from "react";

const InsertBook = () => {
  const history = useHistory();
  const AddBook = () => {
    history.push("/");
  };
  // @ts-ignore
  const [value, setValue] = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [kategory, setKategory] = useState("");
  const [page, setPage] = useState("0");

  const handleChange = (e: any) => {
    e.preventDefault();
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <Container>
      <Wrap>
        <h2>Add Book to Collection</h2>

        <Row className="g-2">
          <Col xxl>
            <FloatingLabel controlId="Title" label="Title">
              <Form.Control
                type="text"
                placeholder="GraphQl Fullstack"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
          <Col xxl>
            <FloatingLabel controlId="Sida" label="Sida ">
              <Form.Control type="text" placeholder="sida 7" />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="g-2" style={{ marginTop: "30px" }}>
          <Col xxl>
            <FloatingLabel controlId="Rating" label="Fler Val Alternativ">
              <Form.Select aria-label="Floating label select example">
                <option>Kategori</option>
                <option value="IT">IT</option>
                <option value="Deckare">Deckare</option>
                <option value="Skönliteratur">Skönliteratur</option>
                <option value="Fantasi">Fantasi</option>
                <option value="Övrigt">Annat</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xxl>
            <FloatingLabel controlId="Bild" label="Bild länkaddres">
              <Form.Control type="text" placeholder="http://hacker.com" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col></Col>
          <Col>
            <Button variant="dark" onClick={AddBook}>
              done
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Wrap>
    </Container>
  );
};

export default InsertBook;

const Wrap = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  padding-top: 6.25%;
  margin-bottom: 6.25%;
  border-radius: 10px;
  max-width: 875px;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
`;
