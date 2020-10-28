import React from "react";
import ReactPlayer from "react-player/youtube";
import ModifiableText from "../components/ModifiableText";
import { font_size, gray_color } from "../Constants";

const CaptionedMedia = ({ url, caption, style, width, height }) => {
  const real_style = {
    borderRadius: "0.5rem",
    overflow: "hidden",
    // margin: "auto",
    // marginTop: "50px",
    ...style,
  };
  //445, 250
  return (
    <div style={{ width: width }}>
      <ReactPlayer style={real_style} url={url} width={width} height={height} />
      <ModifiableText
        text={caption}
        style={{
          fontSize: font_size.caption,
          // color: gray_color,
          maxWidth: "350px",
          margin: "auto",
          marginTop: "20px",
          fontWeight: "regular",
        }}
      />
    </div>
  );
};

export default CaptionedMedia;
