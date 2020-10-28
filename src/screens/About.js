import React, { useEffect, useState } from "react";
import ModifiableText from "../components/ModifiableText";
import TextBlockList from "../transition/paragraph/TextBlockList";
import Me from "../me.jpg";
import { primary_color, about_me_blurb } from "../Constants";
import { Button } from "@material-ui/core";
import ReactPlayer from "react-player/youtube";

const About = ({}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const newTextList = about_me_blurb.split("\n");
    console.log(newTextList);
    console.log(newTextList[0]);

    const newArticles = [...articles];
    for (var i = 0; i < newTextList.length; i++) {
      newArticles.push({ id: i, text: newTextList[i] });
    }
    // setArticles((oldArray) => [...oldArray, { id: 0, text: newTextList[0] }]);
    setArticles(newArticles);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "60vw" }}>
        <div style={{ marginLeft: "100px", marginTop: "100px" }}>
          <TextBlockList items={articles} />
        </div>
      </div>
      <div
        style={{
          // border: "2px solid black",

          // position: "relative",
          // display: "flex",
          width: "40vw",
        }}
      >
        <ReactPlayer
          style={{
            borderRadius: "0.5rem",
            overflow: "hidden",
            alignSelf: "right",
            marginLeft: "5vw",
            marginTop: "5vh",
          }}
          url="https://www.youtube.com/watch?v=_jcbXpQ9BPU"
          width={445}
          height={250}
        />
        <ReactPlayer
          style={{
            borderRadius: "0.5rem",
            overflow: "hidden",
            alignSelf: "right",
            marginLeft: "5vw",
            marginTop: "5vh",
          }}
          url="https://www.youtube.com/watch?v=YakTpnzw3GA"
          width={445}
          height={250}
        />
      </div>
    </div>
  );
};

export default About;
