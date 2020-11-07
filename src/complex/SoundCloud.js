import React from "react";
import ModifiableText from "../components/ModifiableText";
import { font_size, gray_color } from "../Constants";

const SoundCloud = ({
  song_player_link,
  artist_name,
  song_title,
  song_link,
  artist_link,
  style,
  width,
  height,
  caption,
}) => {
  return (
    <div>
      <div style={{ borderRadius: "30px", ...style }}>
        <iframe
          width={width}
          height={height}
          scrolling="no"
          style={{ borderRadius: "10px" }}
          frameborder="no"
          allow="autoplay"
          src={song_player_link}
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "color: #cccccc",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontFamily: "Interstate",
            fontWeight: "100",
          }}
        >
          <a
            href={artist_link}
            title={artist_name}
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          ></a>
          <a
            href={song_link}
            title={song_title}
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          ></a>
        </div>
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

export default SoundCloud;
