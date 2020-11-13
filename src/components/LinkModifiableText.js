import React from "react";
import { primary_color, font_size, font_family } from "../Constants";
import Rubik from "../fonts/Rubik-Bold.ttf";

const LinkModifiableText = ({ text, style, onClick, linkcombs }) => {
  const main_style = {
    color: primary_color,
    fontSize: font_size.home_title,
    fontWeight: "bold",
    fontFamily: Rubik,
    userSelect: "none",
    // display: "flex",
    ...style,
  };

  var textList = text.split(" ");

  //   var i;
  //   for (i = 0; i < linkcombs.length; i++) {
  //     const found = textList.find((element) => element > 10);
  //   }

  var linkcounter;
  for (linkcounter = 0; linkcounter < linkcombs.length; linkcounter++) {
    const found = textList.findIndex(
      (element) => element === linkcombs[linkcounter].marker
    );
    if (found !== -1) {
      // const titleOfLink = textList[found + 1];
      const titleOfLink = textList
        .slice(found + 1, found + linkcombs[linkcounter].count + 1)
        .join(" ");
      textList.splice(found, linkcombs[linkcounter].count + 1);
      // const linkToAdd = `{<a href='${linkcombs[linkelem]}'>${titleOfLink}</a>}`;
      //
      const linkToAdd = (
        <a
          style={{ ...style, color: primary_color, textDecoration: "none" }}
          href={linkcombs[linkcounter].link}
        >
          {titleOfLink + " "}
        </a>
      );
      textList.splice(found, 0, linkToAdd);
    }
  }

  for (var i = 0; i < textList.length; i++) {
    if (typeof textList[i] === "string" || textList[i] instanceof String) {
      textList[i] = textList[i] + " ";
    }
  }

  return (
    <div onClick={onClick}>
      <p style={main_style}>{textList}</p>
    </div>
  );
};

export default LinkModifiableText;
