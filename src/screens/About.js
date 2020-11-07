import React, { useEffect, useState } from "react";
import ModifiableText from "../components/ModifiableText";
import TextBlockList from "../transition/paragraph/TextBlockList";
import {
  primary_color,
  about_me_blurb,
  InstagramIcon,
  font_size,
} from "../Constants";
import { Button } from "@material-ui/core";
import ReactPlayer from "react-player/youtube";

const About = ({}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const newTextList = about_me_blurb.split("\n");
    // console.log(newTextList);

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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ModifiableText
              text="If you're an artist who wants to be featured, check out @melodiesfordays!"
              style={{
                fontSize: font_size.paragraph,
                textAlign: "left",
                opacity: "60%",
              }}
            />
            <Button
              onClick={() =>
                window.open("https://www.instagram.com/melodiesfordays/")
              }
              style={{
                cursor: "default",
                maxWidth: "20px",
                textAlign: "center",
                alignItems: "center",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
              startIcon={
                <InstagramIcon
                  style={{
                    fontSize: 40,
                    color: primary_color,
                    marginRight: "-10px",
                    opacity: "60%",
                  }}
                />
              }
            ></Button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "40vw",
        }}
      >
        <div>
          <ModifiableText
            text="Some of my interviews!"
            style={{
              fontSize: font_size.paragraph,
              textAlign: "center",
              alignSelf: "right",
              marginLeft: "5vw",
              // marginTop: "5vh",
              width: 445,
            }}
          />
        </div>
        <ReactPlayer
          style={{
            borderRadius: "0.5rem",
            overflow: "hidden",
            alignSelf: "right",
            marginLeft: "5vw",
            marginTop: "20px",
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
            marginBottom: "5vh",
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
