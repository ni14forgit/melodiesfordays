import React from "react";
import ModifiableText from "../components/ModifiableText";
import { font_size, gray_color } from "../Constants";

const Spotify = ({ song_link, style, width, height, caption }) => {
  return (
    <div>
      <div style={{ borderRadius: "30px", ...style }}>
        <iframe
          src={song_link}
          width={width}
          height={height}
          style={{ borderRadius: "10px" }}
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
      {caption ? (
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
      ) : null}
    </div>
  );
};

export default Spotify;
