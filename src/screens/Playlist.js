import React from "react";

const Playlist = ({ width }) => {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/playlist/2Meo2E0xLxmDsv2rqnsGKP"
        width={width}
        height="500px"
        frameborder="0"
        style={{ borderRadius: "10px" }}
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Playlist;
