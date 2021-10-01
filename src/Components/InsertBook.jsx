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
import AppContext from "./AppContext";
import { useContext } from "react";

const InsertBook = () => {
  const history = useHistory();

  const {book1, setBook1,book2, setBook2, book3, setBook3 , book4, setBook4, book5, setBook5, book6, setBook6, book7, setBook7, book8, setBook8, book9, setBook9 } = useContext(AppContext)
  
  const AddBook = () => {
    
    history.push("/");
  };




  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
  };
   const handleTitle = (e) => {
     e.preventDefault();
     const currentTitle = e.target.value;


     const lengthOfURL = window.location.href.length-1;
     const selectedBookId = window.location.href[lengthOfURL]
     

     if(selectedBookId =="0" ){
     setBook1( {...book1, title: currentTitle})
       
     }else if(selectedBookId ==="1"){
      setBook2( {...book2, title: currentTitle})

     }else if(selectedBookId ==="2"){
      setBook3( {...book3, title: currentTitle})


     }else if(selectedBookId ==="3"){
      setBook4( {...book4, title: currentTitle})


     }else if(selectedBookId ==="4"){
      setBook5( {...book5, title: currentTitle})


     }else if(selectedBookId ==="5"){
      setBook6( {...book6, title: currentTitle})


     }else if(selectedBookId ==="6"){
      setBook7( {...book7, title: currentTitle})


     }else if(selectedBookId ==="7"){
      setBook7( {...book7, title: currentTitle})


     }else if(selectedBookId ==="8"){
      setBook8( {...book8, title: currentTitle})

     }else if(selectedBookId ==="9"){
      setBook9( {...book9, title: currentTitle})




     }else{
       alert("can't impl impl current book 🎢🎢 ")
     }
    
  }
  

   const handlePage = (e) => {
    e.preventDefault();
    const currentPage = e.target.value;


    const lengthOfURL = window.location.href.length-1;
    const selectedBookId = window.location.href[lengthOfURL]
    const pages =  parseInt(currentPage);
    const points = Math.round(pages/3)
    

    if(selectedBookId =="0" ){
    setBook1( {...book1, page: currentPage, points: points})
      
    }else if(selectedBookId ==="1"){
     setBook2( {...book2, page: currentPage,points: points})

    }else if(selectedBookId ==="2"){
     setBook3( {...book3, page: currentPage, points:points } )


    }else if(selectedBookId ==="4"){
      setBook5( {...book5, page: currentPage, points:points})


     }else if(selectedBookId ==="5"){
      setBook6( {...book6, page: currentPage, points:points})


     }else if(selectedBookId ==="6"){
      setBook7( {...book7, page: currentPage, points:points})


     }else if(selectedBookId ==="7"){
      setBook7( {...book7, page: currentPage, points:points})


     }else if(selectedBookId ==="8"){
      setBook8( {...book8, page: currentPage, points:points})

     }else if(selectedBookId ==="9"){
      setBook9( {...book9, page: currentPage, points:points})
    }else{
      alert("can't impl impl current book 🎢 ")
    }
    
  }
   const handleImage = (e) => {
    e.preventDefault();
    const currentImageURl = e.target.value;


    const lengthOfURL = window.location.href.length-1;
    const selectedBookId = window.location.href[lengthOfURL]

    if(selectedBookId =="0" ){
    setBook1( {...book1, image: currentImageURl})
      
    }else if(selectedBookId ==="1"){
     setBook2( {...book2, image: currentImageURl})

    }else if(selectedBookId ==="2"){
     setBook3( {...book3, image: currentImageURl } )

     
    }else if(selectedBookId ==="4"){
      setBook5( {...book5, image: currentImageURl})


     }else if(selectedBookId ==="5"){
      setBook6( {...book6, image: currentImageURl})


     }else if(selectedBookId ==="6"){
      setBook7( {...book7, image: currentImageURl})


     }else if(selectedBookId ==="7"){
      setBook7( {...book7, image: currentImageURl})


     }else if(selectedBookId ==="8"){
      setBook8( {...book8, image: currentImageURl})

     }else if(selectedBookId ==="9"){
      setBook9( {...book9, image: currentImageURl})

    }else{
      alert("can't impl impl current book 🎢 ")
    }
    
  }
  
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
                onChange={handleTitle}
              />
            </FloatingLabel>
          </Col>
          <Col xxl>
            <FloatingLabel controlId="Sida" label="Sida ">
              <Form.Control type="text" placeholder="sida 7" onChange={handlePage } />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="g-2" style={{ marginTop: "30px" }}>

          <Col xxl>
            <FloatingLabel controlId="Bild" label="Bild länkaddres">
              <Form.Control type="text" placeholder="http://hacker.com"  onChange={handleImage}  alt="image" />
            </FloatingLabel>
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
