import React, { useEffect } from "react";
import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Article from "./screens/Article";
import Playlist from "./screens/Playlist";
import { Route, useHistory } from "react-router-dom";
import ModifiableText from "./components/ModifiableText";
import ButtonMe from "./components/Button";
import { Button } from "@material-ui/core";
import { MusicIcon, font_size, InstagramIcon, YoutubeIcon } from "./Constants";
import useWindowSize from "./UseWindowSize";
import LinksWidget from "./complex/LinksWidget";

function App() {
  const history = useHistory();
  useEffect(() => {
    // history.replace("/playlist");
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
      {/* <LinksWidget height={height} /> */}
      <div
        style={{
          display: "inline-block",
          // width: "100vw",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            // width: isMobile() ? "95vw" : "80vw",
            width: "100vw",
            // width: "100vw",
            maxHeight: "60px",
            alignItems: "center",
            display: "flex",
            backgroundColor: "#f59c42",
            // justifyContent: "space-between",
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
              {/* <Button
                style={{ pointerEvents: "none" }}
                startIcon={
                  <MusicIcon
                    style={{
                      fontSize: isMobile() ? 30 : 40,
                      color: "#f59c42",
                    }}
                  />
                }
              ></Button> */}
              <div>
                <ModifiableText
                  style={{
                    fontSize: isMobile() ? 20 : font_size.home_title,
                    color: "white",
                    marginLeft: "10vw",
                  }}
                  text="melodiesfordays"
                />
              </div>
            </div>
          </div>

          {/* <div>
            <ButtonMe
              onClick={() => history.replace("/about")}
              background="#f59c42"
              text="about"
              passedstyle={{ fontSize: isMobile() ? 16 : 20 }}
            />
          </div> */}
          <div onClick={() => history.push("/about")}>
            <div>
              <ModifiableText
                style={{
                  fontSize: isMobile() ? 20 : 20,
                  color: "white",
                  marginRight: "10vw",
                }}
                text="about"
              />
            </div>
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

      <Route path="/playlist">
        <Playlist />
      </Route>

      {/* </Route> */}
    </div>
  );
}

export default App;
