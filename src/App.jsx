import React, { useContext, useMemo, useState } from "react";
import Header from "./Components/Header";
import Leaderboard from "./Components/Leaderboard";
import BookSection from "./Components/BookSection"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InsertBook from "./Components/InsertBook";
import AppContext from "./Components/AppContext"
import GraphQl from "../src/Assets/fullstackGraphQL.jpg";
import thinkjava from "../src/Assets/javaData.jpg";
import Javadata from "../src/Assets/thinkJava.png";


function App() {
  const [value, setValue] = useState("shu bre");
  const [bookCount, setBookCount] = useState(4);
  const [book1, setBook1] = useState({
    id: 0,
    points: 4,
    title: "jakob med grabbarna",
    page: "12",
    image: GraphQl
  })
  const [book2, setBook2] = useState({
    id: 1,
    points: 5,
    title: " grabbarna",
    page: "15",
    image: Javadata
  })
  const [book3, setBook3] = useState({
    id:2,
    points: 17,
    title: " med ",
    page: "320",
    image: thinkjava
  })


  const [book4, setBook4] = useState({
    id: 3,
    points: 0,
    title: "",
    page: "",
    image: ""
  })

  const [book5, setBook5] = useState({
    id:4,
    points: 0,
    title: "",
    page: "",
    image: ""
  })
  const [book6, setBook6] = useState({
    id:5,
    points: 0,
    title: "",
    page: "",
    image: ""
  }) 
   const [book7, setBook7] = useState({
    id:6,
    points: 0,
    title: "",
    page: "",
    image: ""
  }) 
   const [book8, setBook8] = useState({
    id:7,
    points: 0,
    title: "",
    page: "",
    image: ""
  })
    const [book9, setBook9] = useState({
    id:8,
    points: 0,
    title: "",
    page: "",
    image: ""
  }) 

  
  const providerValue = useMemo(() => ({value, setValue, book1, setBook1, book2, setBook2, book3, setBook3, setBook4,book4, setBook5, book5,book6, setBook6, book7, setBook7, book8, setBook8, book9, setBook9, bookCount, setBookCount}), [value, setValue, book1, setBook1, book2, setBook2, book3, setBook3, setBook4,book4, setBook5, book5,book6, setBook6, book7, setBook7, book8, setBook8, book9, setBook9,bookCount, setBookCount]);

  return (
    // @ts-ignore
    <AppContext.Provider value={providerValue}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Leaderboard />
              <BookSection />
            </Route>
            <Route path={"/book/:id"}>
              <InsertBook />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
