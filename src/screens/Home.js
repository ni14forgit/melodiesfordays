import React, { useState, useEffect } from "react";
import ModifiableText from "../components/ModifiableText";
import Button from "../components/Button";
import Card from "../complex/Card";
import firebase from "../store/firebase";
import { font_family } from "../Constants";
import Spotify from "../complex/Spotify";
import LinkModifiableText from "../components/LinkModifiableText";
import useWindowSize from "../UseWindowSize";

const db = firebase.firestore();

const Home = () => {
  const [articles, setArticles] = useState([]);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var artistsRef = storageRef.child("artists");
  // var artistsNewRef = artistsRef.child("new");
  const [width, height] = useWindowSize();
  const isMobile = () => {
    return width <= 500;
  };
  useEffect(async () => {
    const headersRef = db.collection("headers");
    const snapshot = await headersRef.get();
    snapshot.forEach((doc) => {
      const data = doc.data();
      artistsRef
        .child(doc.id + ".jpg")
        .getDownloadURL()
        .then(function (url) {
          setArticles([
            ...articles,
            {
              img: url,

              text: data.title,
              date: data.date,
              id: doc.id,
            },
          ]);
        });
    });
  }, []);

  return (
    <div>
      <div
        style={{
          marginLeft: isMobile() ? null : "10vw",
          width: "100vw",
          // border: "2px solid purple",
        }}
      >
        <div
          style={{
            flexDirection: isMobile() ? "column" : "row",
            display: isMobile() ? null : "flex",
            width: isMobile() ? "300px" : "72vw",
            flexWrap: "wrap",
            margin: isMobile() ? "auto" : null,
            marginTop: "50px",
            // border: "2px solid black",
            textAlign: isMobile() ? "center" : null,
          }}
        >
          {articles.map((val, ind) => {
            return (
              <Card
                image={val.img}
                newimage={val.newimg}
                title={val.text}
                date={val.date}
                id={val.id}
              />
            );
          })}
        </div>
        {/* <LinkModifiableText
          text="Hi there marker1 yomama obama lama"
          linkcombs={[
            { count: 2, link: "https://www.google.com", marker: "marker1" },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Home;
