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
  
  const providerValue = useMemo(() => ({value, setValue, book1, setBook1, book2, setBook2, book3, setBook3}), [value, setValue, book1, setBook1, book2, setBook2, book3, setBook3]);

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
