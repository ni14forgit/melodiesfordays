import React from "react";
import { primary_color } from "../../Constants";
import ModifiableText from "../../components/ModifiableText";
import { font_size } from "../../Constants";
import useWindowSize from "../../UseWindowSize";

const TextBlock = ({ text }) => {
  const [width, height] = useWindowSize();
  const isMobile = () => {
    return width <= 500;
  };
  return (
    <div style={{ width: isMobile() ? "95vw" : "50vw", textAlign: "center" }}>
      <ModifiableText text={text} style={{ fontSize: font_size.paragraph }} />
    </div>
  );
};

export default TextBlock;
