import React from "react";
import Header from "./Components/Header";
import Leaderboard from "./Components/Leaderboard";
import BookSection from "./Components/BookSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InsertBook from "./InsertBook";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Leaderboard />
            <BookSection />
          </Route>
          <Route exact path="/product/:id">
            <InsertBook />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
