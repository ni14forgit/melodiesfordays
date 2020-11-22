import React, { useState } from "react";
import ModifiableText from "./ModifiableText";
import Rubik from "../fonts/Rubik-Bold.ttf";

const Button = ({ background, foreground, text, onClick, passedstyle }) => {
  const [shadow, setShadow] = useState(false);
  const backgroundstyle = {
    borderRadius: 5,
    // padding: 5,
    // width: 125,
    // display: "inline-block",
    // maxHeight: 40,
    width: "fit-content",
    position: "relative",
    boxShadow: shadow ? "1px 3px 1px #9E9E9E" : "",
    zIndex: 2,

    // maxHeight: 40,
    // textAlign: "center",
    // textAlign: "center",
    // alignSelf: "center",
    // justifyContent: "center",
    backgroundColor: background,
  };
  const main_style = {
    fontWeight: "bold",
    fontFamily: Rubik,
    userSelect: "none",
    fontSize: 20,
    zIndex: 1,
    color: "white",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    ...passedstyle,
  };
  return (
    <div
      style={backgroundstyle}
      onClick={onClick}
      onMouseLeave={() => setShadow(false)}
      onMouseEnter={() => setShadow(true)}
    >
      {/* <ModifiableText
        text={text}
        style={{
          fontSize: 20,
          zIndex: 1,
          color: "white",
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 5,
        }}
      /> */}
      <div>
        <p style={main_style}>{text}</p>
      </div>
    </div>
  );
};

export default Button;
