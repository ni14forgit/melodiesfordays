import React, { useState } from "react";
// import zayn from "../zayn2.jpg";
import { primary_color } from "../Constants";
import ModifiableText from "../components/ModifiableText";
import { useStore } from "../store/store";
import { useHistory } from "react-router-dom";

const Card = ({ title, image, date, onClick, id, newimage }) => {
  const height = "350px";
  const width = "300px";
  const [highlighted, setHighlighted] = useState(false);
  const [state, dispatch] = useStore();
  const history = useHistory();

  const setArticle = (ind) => {
    dispatch("SET_ID", id);
    history.replace("article/" + id);
  };

  var bottomMargin = Math.ceil(title.length / 25) * 32 + 58;

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
          backgroundSize: "cover",
          backgroundImage: `url(${highlighted ? newimage : image})`,
          width: width,
          height: height,
          borderRadius: 10,
          // position: "absolute",
        }}
      >
        <div
          style={{
            // position: "absolute",
            height: height,
            width: width,
            backgroundColor: highlighted ? primary_color : "black",
            zIndex: "100",
            opacity: "0.3",
            borderRadius: 10,
          }}
        />
        <div
          style={{
            zIndex: "201",
            position: "absolute",
            // paddingTop: 235,
            // paddingTop: -50,
            marginTop: -bottomMargin,
            width: 270,
            // height: "auto",
            height: 0,
            // border: "2px solid black",
            flexDirection: "column",
            textAlign: "left",
            alignItems: "flex-end",
            paddingLeft: "20px",
            paddingRight: "10px",
            justifyContent: "flex-end",
          }}
        >
          <ModifiableText
            text={title}
            style={{
              color: highlighted ? "white" : primary_color,
              fontSize: 22,
              // position: "relative",
            }}
          />
        </div>
        <div
          style={{
            zIndex: "201",
            position: "absolute",
            // paddingTop: 235,
            // paddingTop: -50,
            marginTop: -50,
            width: 270,
            // height: "auto",
            height: 0,
            // border: "2px solid black",
            flexDirection: "column",
            textAlign: "left",
            alignItems: "flex-end",
            paddingLeft: "20px",
            paddingRight: "10px",
            justifyContent: "flex-end",
          }}
        >
          <ModifiableText
            text={date}
            style={{
              color: highlighted ? "white" : primary_color,
              fontSize: 15,

              // position: "relative",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
