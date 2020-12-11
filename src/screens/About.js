import React, { useEffect, useState } from "react";
import ModifiableText from "../components/ModifiableText";
import TextBlockList from "../transition/paragraph/TextBlockList";
import {
  primary_color,
  about_me_blurb,
  InstagramIcon,
  font_size,
} from "../Constants";
// import { Button } from "@material-ui/core";
// import ReactPlayer from "react-player/youtube";
import useWindowSize from "../UseWindowSize";
import Playlist from "./Playlist";

const About = ({}) => {
  const [articles, setArticles] = useState([]);

  const [width, height] = useWindowSize();

  const isMobile = () => {
    return width <= 500;
  };

  useEffect(() => {
    const newTextList = about_me_blurb.split("\n");

    const newArticles = [...articles];
    for (var i = 0; i < newTextList.length; i++) {
      newArticles.push({ id: i, text: newTextList[i] });
    }
    // setArticles((oldArray) => [...oldArray, { id: 0, text: newTextList[0] }]);
    setArticles(newArticles);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile() ? "column" : "row",
        marginTop: isMobile() ? "40px" : "100px",
      }}
    >
      <div
        style={{
          width: isMobile() ? "100vw" : "60vw",
        }}
      >
        <div
          style={{
            marginLeft: isMobile() ? "10px" : "100px",
          }}
        >
          <TextBlockList items={articles} />
        </div>
        <iframe
          src="https://giphy.com/embed/mTuvku74NSGnC"
          width={isMobile() ? width * 0.9 : "480"}
          height={isMobile() ? width * 0.51 : "270"}
          frameBorder="0"
          class="giphy-embed"
          style={{
            borderRadius: "10px",
            marginTop: "30px",
            maxWidth: "90%",
            // border: "2px solid black",
          }}
          allowFullScreen
        ></iframe>
      </div>
      <div
        style={{
          width: isMobile() ? "100vw" : "40vw",
        }}
      >
        <div
          style={{
            marginTop: isMobile() ? "10px" : "0px",
            alignItems: "center",
          }}
        >
          <Playlist width={isMobile() ? width * 0.9 : width * 0.3} />
        </div>
      </div>
    </div>
  );
};

export default About;
