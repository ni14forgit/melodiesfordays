import React, { useState, useEffect } from "react";
import ModifiableText from "../components/ModifiableText";
import { gray_color, font_size, primary_color } from "../Constants";
import { useStore } from "../store/store";
import CaptionedMedia from "../complex/CaptionedMedia";
import SoundCloud from "../complex/SoundCloud";
import ArticleHeader from "../complex/ArticleHeader";
import Me from "../newme.JPG";
import useWindowSize from "../UseWindowSize";
import ArticleHeaderList from "../transition/articleheader/ArticleHeaderList";
import firebase from "../store/firebase";
import { BoxLoading } from "react-loadingg";
import Spotify from "../complex/Spotify";
import LinkModifiableText from "../components/LinkModifiableText";

const LineBreak = () => {
  return (
    <div
      style={{
        height: "2px",
        width: "65vw",
        margin: "auto",
        backgroundColor: gray_color,
        opacity: 0.7,
        marginTop: "50px",
        marginBottom: "50px",
      }}
    ></div>
  );
};

const Article = ({ match }) => {
  const [state, dispatch] = useStore();
  const [headers, setHeaders] = useState([]);
  const [useMasterList, setMasterList] = useState([]);
  const [linkcombs, setLinkCombs] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = firebase.firestore();
  // var linkcombs = [];

  useEffect(async () => {
    // var id = state["id"];
    var id = match.params.id;

    if (id) {
      localStorage.setItem("id", id);
    } else {
      id = localStorage.getItem("id");
    }

    const artistHeaderRef = db.collection("headers").doc(id);
    const headerDoc = await artistHeaderRef.get();
    const headerDocData = headerDoc.data();
    const artistBlogRef = db.collection("blogcontent").doc(id);
    const artistBlogDoc = await artistBlogRef.get();
    const artistBlogDocData = artistBlogDoc.data();
    const artistBlogMediaRef = artistBlogRef.collection("media");
    const artistBlogMediaSnapshot = await artistBlogMediaRef.get();
    const youtube = [];
    const soundcloud = [];
    artistBlogMediaSnapshot.forEach((doc) => {
      const artistBlogMediaSnapshotData = doc.data();

      switch (artistBlogMediaSnapshotData.type) {
        case "youtube":
          // code block
          youtube.push(artistBlogMediaSnapshotData);
          break;
        case "soundcloud":
          // code block
          soundcloud.push(artistBlogMediaSnapshotData);
          break;
        default:
        // code block
      }
    });
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var artistsRef = storageRef.child("artists");
    var profilePictureURL = await artistsRef
      .child(id + ".jpg")
      .getDownloadURL();
    const paragraphs = artistBlogDocData.text;
    setLinkCombs(artistBlogDocData.linkcombs);
    var paragraph_counter = 0;
    var youtube_counter = 0;
    var soundcloud_counter = 0;
    var media_counter = 0;
    var masterList = [];
    var generalMediaList = [];
    masterList.push({
      type: "quote",
      text: artistBlogDocData.quote,
    });
    while (
      youtube_counter < youtube.length ||
      soundcloud_counter < soundcloud.length
    ) {
      if (youtube_counter < youtube.length) {
        generalMediaList.push(youtube[youtube_counter]);
        youtube_counter = youtube_counter + 1;
      }
      if (soundcloud_counter < soundcloud.length) {
        generalMediaList.push(soundcloud[soundcloud_counter]);
        soundcloud_counter = soundcloud_counter + 1;
      }
    }
    // isSoundcloud = true;
    while (
      paragraph_counter < paragraphs.length ||
      media_counter < generalMediaList.length
    ) {
      for (var i = 0; i < 2; i++) {
        if (paragraph_counter < paragraphs.length) {
          masterList.push({
            type: "paragraph",
            text: paragraphs[paragraph_counter],
          });
          paragraph_counter = paragraph_counter + 1;
        }
      }
      if (media_counter < generalMediaList.length) {
        masterList.push(generalMediaList[media_counter]);
        media_counter += 1;
      }
    }
    setMasterList(masterList);
    setLoading(false);
    setHeaders([
      {
        artistProfilePhoto: profilePictureURL,
        articleTitle: headerDocData.title,
        date: headerDocData.date,
        location: headerDocData.location,
        artistName: headerDocData.name,
        insta_link: artistBlogDocData.insta,
        tiktok_link: artistBlogDocData.tiktok,
        spotify_link: artistBlogDocData.spotify,
        soundcloud_link: artistBlogDocData.soundcloud,
      },
    ]);
  }, []);

  const [width, height] = useWindowSize();

  return !loading ? (
    <div>
      <ArticleHeaderList items={headers} />

      <div style={{ maxWidth: "60vw", margin: "auto", marginTop: "100px" }}>
        {useMasterList.map((element) => {
          if (element.type === "paragraph") {
            return (
              <LinkModifiableText
                text={element.text}
                style={{
                  fontSize: font_size.paragraph,
                  textAlign: "left",
                  marginTop: "50px",
                  marginBottom: "50px",
                  color: gray_color,
                }}
                // linkcombs={[
                //   {
                //     count: 1,
                //     link: "https://www.google.com",
                //     marker: "marker1",
                //   },
                // ]}
                linkcombs={linkcombs}
              />
            );
          } else if (element.type === "youtube") {
            return (
              <CaptionedMedia
                url={element.url}
                caption={element.caption}
                width={width * 0.6}
                height={width * 0.337}
                style={{ marginTop: "50px" }}
              />
            );
          } else if (element.type === "quote") {
            return (
              <ModifiableText
                text={element.text}
                style={{
                  fontStyle: "italic",
                  fontSize: font_size.article.quote,
                  textAlign: "left",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              />
            );
          } else if (element.type === "soundcloud") {
            return (
              <SoundCloud
                song_player_link={element.song_player_link}
                artist_name={element.artist_name}
                song_title={element.song_title}
                artist_link={element.artist_link}
                song_link={element.song_link}
                style={{
                  textAlign: "left",
                  marginTop: "50px",
                }}
                width={width * 0.6}
                caption={element.caption}
              />
            );
          } else if (element.type === "spotify") {
            return (
              <Spotify
                song_link="https://open.spotify.com/embed/track/45bE4HXI0AwGZXfZtMp8JR"
                width={width * 0.6}
                height={"150px"}
                caption={element.caption}
                style={{
                  textAlign: "left",
                  marginTop: "50px",
                }}
              />
            );
          }
        })}
      </div>

      {/* <LineBreak /> */}

      <div
        style={{
          textAlign: "left",
          width: "60vw",
          margin: "auto",
          marginBottom: "50px",
        }}
      >
        <div style={{}}>
          <div
            style={{
              justifyContent: "row",
              alignItems: "bottom",
              display: "flex",
              // height: "40px",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={Me}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                // textAlign: "left",
                // border: "4px solid #f59c42",
                // marginTop: "50px",
              }}
            />
            <div
              style={{
                // display: "flex",
                height: 50,
                marginLeft: "15px",
                // marginBottom: "-30px",
                marginTop: "30px",
                // border: "4px solid black",
              }}
            >
              <ModifiableText
                text="@melodiesfordays"
                style={{
                  fontSize: 17,
                  color: gray_color,
                  height: 20,
                  // border: "2px solid black",
                }}
              />
              <ModifiableText
                text="dm to be featured!"
                style={{
                  fontSize: 17,
                  fontWeight: "regular",
                  // color: gray_color,
                  height: 20,
                  // border: "2px solid black",
                  marginTop: "-16px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <LineBreak /> */}

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          width: "65vw",
          flexWrap: "wrap",
          margin: "auto",
          textAlign: "left",
          // alignItems: "center",
          // justifyContent: "space-between",
          // border: "2px solid black",
        }}
      >
        {/* {ARTIST_LIST.map((val, ind) => {
          return <Card image={val.img} title={val.text} date={val.date} />;
        })} */}
      </div>
    </div>
  ) : (
    <BoxLoading size="large" color={primary_color} />
  );
};

export default Article;
