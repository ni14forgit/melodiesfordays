import React, { useState, useEffect } from "react";
import ModifiableText from "../components/ModifiableText";
import Button from "../components/Button";
import Card from "../complex/Card";
import firebase from "../store/firebase";
import { font_family } from "../Constants";
import Spotify from "../complex/Spotify";
import LinkModifiableText from "../components/LinkModifiableText";

const db = firebase.firestore();

const Home = () => {
  const [articles, setArticles] = useState([]);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var artistsRef = storageRef.child("artists");
  var artistsNewRef = artistsRef.child("new");
  useEffect(async () => {
    const headersRef = db.collection("headers");
    const snapshot = await headersRef.get();
    snapshot.forEach((doc) => {
      const data = doc.data();
      artistsRef
        .child(doc.id + ".jpg")
        .getDownloadURL()
        .then(function (url) {
          artistsNewRef
            .child(doc.id + ".jpg")
            .getDownloadURL()
            .then(function (newurl) {
              setArticles([
                ...articles,
                {
                  img: url,
                  newimg: newurl,
                  text: data.title,
                  date: data.date,
                  id: doc.id,
                },
              ]);
            });
        });
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
            marginTop: "50px",
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
