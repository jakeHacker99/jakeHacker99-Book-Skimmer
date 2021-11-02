import React, { useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"



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
import SearchIcon from '@material-ui/icons/Search';
const WordSearch = () => {
    const history = useHistory();
    const [search, setSearch] = useState("")
    const [clicked, setClicked] = useState(false)
    const [searchHit, setSearchHit] = useState({})
    const [def, setDef] = useState("")
    const [ex, setEx] = useState("")
    const [err, setErr] = useState(false)

var options = {
  method: 'GET',
  url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  params: {term: `${search}`},
  headers: {
    'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
    'x-rapidapi-key': '411ca65608mshbac7a5999aa31bfp1b9e03jsn142ee5674f64'
  },
  mode: 'no-cors'
};

     const handleSearch = (e) => {
         e.preventDefault();
         setSearch(e.target.value);
    }


    useEffect(() => {
      axios.request(options).then(function (response) {
        setSearchHit(response.data.list[0])
        setDef(response.data.list[0].definition)
        setEx(response.data.list[0].example)
        console.log(searchHit);
      }).catch(function (error) {
        console.error(error);
        setErr(true)
      });
      
    }, [clicked])

    return (
        <div>
            <Container>
      <Wrap>
        <h2>Search for definition</h2>

        <Row className="g-2">
          <Col xxl>
            <FloatingLabel controlId="Title" label="Title">
              <Form.Control
                type="text"
                placeholder="GraphQl Fullstack"
                onChange={handleSearch}
              />
            </FloatingLabel>
          </Col>
          <Col xxl  >
            <div onClick={() => {
              setSearch(search)
              setClicked(true)
              
            }}   style={{display: "flex", flexDirection:"row", }}>
            <button >
    Search
    <SearchIcon/>
            </button>



<button onClick={() => {console.log("reset")
setSearch("")
setErr(false)
setClicked(false)

}} style={{marginLeft:"auto"}} >Reset</button>
</div>


          </Col>
        </Row>

        <Row className="g-2" style={{ marginTop: "30px" }}>

          <Col xxl>
              
                <div >
                  {
                    err && clicked ? 
                    <li>  word {search} wasn't found! 🤑  </li>:null
                    
                  }
         
         <div>
                    {!err && clicked?

                          <ul>
                          <li> def: {def} </li>
                          <li style={{marginTop:'50px'}}> ex: {ex} </li>
                          
                      </ul>
                      :
                      null
                  }
         </div>
                </div>
                

          </Col>
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
    )
}

export default WordSearch


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
