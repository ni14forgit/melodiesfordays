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

  // setArticles((oldList) => [
  //   ...oldList,
  // {
  //   img: url,
  //   text: data.title,
  //   date: data.date,
  //   id: doc.id,
  // },
  // ]);

  function isFirstBeforeSecond(one, two) {
    const oneDate = one.added.split("/");
    const twoDate = two.added.split("/");
    for (var i = 2; i >= 0; i--) {
      if (parseInt(twoDate[i], 10) !== parseInt(oneDate[i], 10)) {
        return parseInt(oneDate[i], 10) < parseInt(twoDate[i], 10);
      }
    }
    return true;
  }

  function merge(left, right) {
    let resultArray = [],
      leftIndex = 0,
      rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (!isFirstBeforeSecond(left[leftIndex], right[rightIndex])) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }

  function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(mergeSort(left), mergeSort(right));
  }

  const myAsyncFunc = async (doc, data) => {
    return artistsRef
      .child(doc.id + ".jpg")
      .getDownloadURL()
      .then(function (url) {
        return {
          img: url,
          text: data.title,
          date: data.date,
          id: doc.id,
          added: data.added,
        };
      });
  };

  async function initialFunction() {
    const headersRef = db.collection("headers");
    const snapshot = await headersRef.get();
    var myarticles = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      myarticles.push(myAsyncFunc(doc, data));
    });
    return Promise.all(myarticles);
  }

  useEffect(() => {
    initialFunction().then((result) => {
      setArticles(mergeSort(result));
    });
  }, []);

  return (
    <div>
      <div
        style={{
          marginLeft: isMobile() ? null : "10vw",
          width: "100vw",
          marginTop: isMobile() ? null : "40px",
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
