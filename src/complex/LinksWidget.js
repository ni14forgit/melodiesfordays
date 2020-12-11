import React, { useState } from "react";
import { YoutubeIcon, InstagramIcon } from "../Constants";
// import { OpenButton, CloseButton } from "../components/OpenCloseButtons";

const LinksWidget = ({ height, isMobile }) => {
  //   const [shown, setShown] = useState(true);
  return isMobile ? null : (
    <div>
      <div
        style={{
          position: "absolute",
          bottom: height / 3 + 95,
          left: 35,
          zIndex: 2,
        }}
      >
        {/* <CloseButton
          onClick={() => {
            setShown(false);
          }}
          diameter={20}
        /> */}
      </div>
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          width: "45px",
          bottom: height / 3,
          height: "100px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          borderRight: "1px solid #f59c42",
          borderTop: "1px solid #f59c42",
          borderBottom: "1px solid #f59c42",
          justifyContent: "space-between",
        }}
      >
        <InstagramIcon
          onClick={() =>
            window.open("https://www.instagram.com/melodiesfordays/")
          }
          style={{
            fontSize: 30,
            color: "#f59c42",
            // border: "2px solid black",
            marginTop: "15px",
          }}
        />
        <YoutubeIcon
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCUdyZYFZe-416WT0tjqfk3A/featured?view_as=subscriber"
            )
          }
          style={{
            fontSize: 34,
            color: "#f59c42",
            marginTop: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default LinksWidget;
