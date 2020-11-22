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
import { MusicIcon, font_size } from "./Constants";
import useWindowSize from "./UseWindowSize";

function App() {
  const history = useHistory();
  useEffect(() => {
    // history.replace("/home");
    // history.replace("/about");
    // history.replace("/article");
  });
  const [width, height] = useWindowSize();

  const isMobile = () => {
    return width <= 500;
  };

  return (
    <div className="App" style={{ alignItems: "center" }}>
      <div style={{ display: "inline-block" }}>
        <div
          style={{
            flexDirection: "row",
            width: isMobile() ? "95vw" : "80vw",
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
                      fontSize: isMobile() ? 30 : 40,
                      color: "#f59c42",
                    }}
                  />
                }
              ></Button>
              <div>
                <ModifiableText
                  style={{ fontSize: isMobile() ? 20 : font_size.home_title }}
                  text="melodiesfordays"
                />
              </div>
            </div>
          </div>

          <div>
            <ButtonMe
              onClick={() => history.replace("/about")}
              background="#f59c42"
              text={"About me"}
              passedstyle={{ fontSize: isMobile() ? 16 : 20 }}
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
