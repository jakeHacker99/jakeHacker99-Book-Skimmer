import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";

import GraphQl from "../Assets/fullstackGraphQL.jpg";
import styled from "styled-components";
import { UserContext } from "../Context/useContext";

const BookSectoin = () => {
  const sida = 124;
  const id = 124;
  const history = useHistory();
  let idPage = `product/${id}`;
  const goToBookpage = () => {
    history.push(idPage);
  };
  const msg = useContext(UserContext);

  return (
    <div>
      <Content>
        <Card
          style={{
            width: "12rem",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Card.Img
            variant="top"
            src={GraphQl}
            style={{ padding: "3rem", width: "100%" }}
          />
          <Wrap>
            <Row>
              <Col></Col>
              <Col>
                <Card.Title>GraphQL </Card.Title>
                <Card.Text>Sida: {sida} </Card.Text>
                <Card.Text>Ranking: </Card.Text>
                <Card.Text>sida: {sida} </Card.Text>
                <Button
                  variant="primary"
                  className="shu"
                  onClick={goToBookpage}
                >
                  Edit
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Wrap>
        </Card>
        <Card
          style={{
            width: "12rem",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Card.Img
            variant="top"
            src={GraphQl}
            style={{ padding: "3rem", width: "100%" }}
          />
          <Wrap>
            <Row>
              <Col></Col>
              <Col>
                <Card.Title>GraphQL </Card.Title>
                <Card.Text>Sida: {sida} </Card.Text>
                <Card.Text>Ranking: {msg} </Card.Text>
                <Card.Text>sida: {sida} </Card.Text>
                <Button
                  variant="primary"
                  className="shu"
                  onClick={goToBookpage}
                >
                  Edit
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Wrap>
        </Card>
        <Card
          style={{
            width: "12rem",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Card.Img
            variant="top"
            src={GraphQl}
            style={{ padding: "3rem", width: "100%" }}
          />
          <Wrap>
            <Row>
              <Col></Col>
              <Col>
                <Card.Title>GraphQL </Card.Title>
                <Card.Text>Sida: {sida} </Card.Text>
                <Card.Text>Ranking: </Card.Text>
                <Card.Text>sida: {sida} </Card.Text>
                <Button
                  variant="primary"
                  className="shu"
                  onClick={goToBookpage}
                >
                  Edit
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Wrap>
        </Card>
      </Content>
    </div>
  );
};

export default BookSectoin;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 962px) and (min-width: 452px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-left: auto;
    margin-left: auto;
    width: 95%;
  }
  @media (max-width: 452px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-left: auto;
    margin-left: auto;
    width: 100%;
  }
`;

const Wrap = styled.div`
  padding-top: 6.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 768px) {
    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
    }
  }
`;
