import React, { useContext, useMemo, useState } from "react";
import Header from "./Components/Header";
import Leaderboard from "./Components/Leaderboard";
import BookSection from "./Components/BookSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InsertBook from "./Components/InsertBook";
import { UserContext } from "./Context/useContext";

function App() {
  const [value, setValue] = useState("0");
  const providerValue = useMemo(() => [value, setValue], [value, setValue]);

  return (
    // @ts-ignore
    <UserContext.Provider value={providerValue}>
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
    </UserContext.Provider>
  );
}

export default App;
