import React, { useState } from "react";
// import zayn from "../zayn2.jpg";
import { primary_color } from "../Constants";
import ModifiableText from "../components/ModifiableText";
import { useStore } from "../store/store";
import { useHistory } from "react-router-dom";

const Card = ({ title, image, date, onClick, id }) => {
  const height = "350px";
  const width = "300px";
  const [highlighted, setHighlighted] = useState(false);
  const [state, dispatch] = useStore();
  const history = useHistory();

  const setArticle = (ind) => {
    dispatch("SET_TITLE", title);
    dispatch("SET_DATE", date);
    dispatch("SET_PROFILE_PHOTO", image);
    history.push("article");
  };

  const newOnClick = onClick ? onClick : setArticle;

  return (
    <div
      onMouseEnter={() => setHighlighted(true)}
      onMouseLeave={() => setHighlighted(false)}
      onClick={newOnClick}
      style={{
        width: width,
        height: height,
        marginRight: "2vw",
        marginBottom: "2vh",
      }}
    >
      <div
        style={{
          //   zIndex: 100,
          //   backgroundColor: "blue",
          backgroundSize: "cover",
          backgroundImage: `url(${image})`,
          width: width,
          height: height,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            height: height,
            width: width,
            backgroundColor: highlighted ? primary_color : "black",
            zIndex: "100",
            opacity: "0.40",
            borderRadius: 10,
          }}
        />

        {/* <img
          src={Zayn}
          style={{
            zIndex: 1,
            width: "250px",
            height: "300px",
            borderRadius: 10,
          }}
        /> */}
      </div>
      <div
        style={{
          zIndex: "201",
          position: "relative",
          marginTop: -90,

          height: "auto",
          // paddingTop: "290px",
          flexDirection: "column",
          textAlign: "left",
          alignItems: "flex-end",

          // paddingBottom: "30px",
          paddingLeft: "20px",
          paddingRight: "10px",
          justifyContent: "flex-start",
        }}
      >
        <ModifiableText
          text={title}
          style={{
            color: highlighted ? "white" : primary_color,
            fontSize: 22,
            // paddingTop: 270,
            position: "relative",
          }}
        />
      </div>
      <div
        style={{
          zIndex: "201",
          position: "relative",
          marginTop: -15,

          height: "auto",
          // paddingTop: "290px",
          flexDirection: "column",
          textAlign: "left",
          alignItems: "flex-end",

          // paddingBottom: "30px",
          paddingLeft: "20px",
          paddingRight: "10px",
          justifyContent: "flex-start",
        }}
      >
        <ModifiableText
          text={date}
          style={{
            color: highlighted ? "white" : primary_color,
            fontSize: 15,
            // paddingTop: 270,
            position: "relative",
          }}
        />
      </div>
    </div>
  );
};

export default Card;
