import React, { useState, useEffect } from "react";
import ModifiableText from "../components/ModifiableText";
import Button from "../components/Button";
import Card from "../complex/Card";
import Emily from "../emily.jpg";
import Eric from "../eric.jpg";
import firebase from "../store/firebase";
import { font_family } from "../Constants";
// import { useStore } from "../store/store";
// import { useHistory } from "react-router-dom";

const ARTIST_LIST = [
  {
    img: Emily,
    text: "Emili Debuts Single!",
    date: "October 20th, 2020",
  },
  {
    img: Eric,
    text: "Meet Beat-ah-Sufah!",
    date: "October 1st, 2020",
  },
];

const db = firebase.firestore();

const Home = () => {
  const [articles, setArticles] = useState([]);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  useEffect(async () => {
    const articlesRef = db.collection("articles");
    const snapshot = await articlesRef.get();
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  }, []);

  return (
    <div>
      <div style={{ marginLeft: "10vw" }}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            maxWidth: "72vw",
            flexWrap: "wrap",
            // alignItems: "center",
            // justifyContent: "space-between",
            // border: "2px solid black",
          }}
        >
          {ARTIST_LIST.map((val, ind) => {
            return <Card image={val.img} title={val.text} date={val.date} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
