import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Article from "./screens/Article";
import { Route, useHistory } from "react-router-dom";
import ModifiableText from "./components/ModifiableText";
import ButtonMe from "./components/Button";
import { Button } from "@material-ui/core";
import { MusicIcon } from "./Constants";

function App() {
  const history = useHistory();
  useEffect(() => {
    // history.replace("/home");
    // history.replace("/about");
    // history.replace("/article");
  });
  return (
    <div className="App" style={{ alignItems: "center" }}>
      <div style={{ display: "inline-block" }}>
        <div
          style={{
            flexDirection: "row",
            width: "80vw",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              onClick={() => history.push("/home")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{ pointerEvents: "none" }}
                startIcon={
                  <MusicIcon
                    style={{
                      fontSize: 40,
                      color: "#f59c42",
                    }}
                  />
                }
              ></Button>
              <div>
                <ModifiableText text="melodiesfordays" />
              </div>
            </div>
          </div>

          <div>
            <ButtonMe
              onClick={() => history.replace("/about")}
              background="#f59c42"
              text={"About me"}
            />
          </div>
        </div>
      </div>

      <Route exact path="/" render={(props) => <Home />} />
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route
        path="/article/:id"
        render={({ match }) => <Article match={match} />}
      />
      {/* </Route> */}
    </div>
  );
}

export default App;
