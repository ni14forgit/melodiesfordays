import React from "react";
import { primary_color, font_size, font_family } from "../Constants";
import Rubik from "../fonts/Rubik-Bold.ttf";

const ModifiableText = ({ text, style, onClick }) => {
  const main_style = {
    color: primary_color,
    fontSize: font_size.home_title,
    fontWeight: "bold",
    fontFamily: Rubik,
    userSelect: "none",
    // display: "flex",
    ...style,
  };

  // const newText = text.split("\n").map((str) => <p>{str}</p>);
  // var link = <a href={""}>log in</a>;
  // const newText = <a>hihi {link} + hihi</a>;
  return (
    <div onClick={onClick}>
      <p style={main_style}>{text}</p>
    </div>
  );
};

export default ModifiableText;
