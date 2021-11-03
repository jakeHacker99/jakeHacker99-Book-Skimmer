import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Container,
  Col,
  FloatingLabel,
  Row,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
const WordSearch = () => {
  
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchHit, setSearchHit] = useState();

  var API_KEY= process.env.REACT_APP_SECRET_KEY;
  var API_HOST= process.env.REACT_APP_DOMAIN_NAME;



  const options = {
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    params: { term: `${search}` },
    headers: {
      "x-rapidapi-host": API_HOST,
      "x-rapidapi-key": API_KEY,
    },
    mode: "no-cors",
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [clicked]);

  return (
    <div>
      <Container>
        <Wrap>
          <h2>Search for definition</h2>

          <Row className="g-2">
            <Col xxl>
              <FloatingLabel controlId="Title" label="Word">
                <Form.Control
                  type="text"
                  placeholder={search}
                  onChange={handleSearch}
                />
              </FloatingLabel>
            </Col>
            <Col xxl>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button
                  onClick={() => {
                    setSearch(search);
                    setClicked(!clicked);
                  }}
                >
                  Search
                  <SearchIcon />
                </button>
                <button
                  onClick={() => {
                    console.log(search)
                  }}
                  style={{ margin: "auto" }}
                >
                  reset
                </button>
              </div>
            </Col>
          </Row>

          <Row className="g-2" style={{ marginTop: "30px" }}>
            <Col xxl></Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col></Col>
            <Col>
              <Button variant="dark" onClick={() => history.push("/")}>
                done
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Wrap>
      </Container>
    </div>
  );
};

export default WordSearch;

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
