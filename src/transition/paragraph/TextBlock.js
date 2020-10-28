import React from "react";
import { primary_color } from "../../Constants";
import ModifiableText from "../../components/ModifiableText";
import { font_size } from "../../Constants";

const TextBlock = ({ text }) => {
  return (
    <div style={{ width: "50vw", textAlign: "left" }}>
      <ModifiableText text={text} style={{ fontSize: font_size.paragraph }} />
    </div>
  );
};

export default TextBlock;
