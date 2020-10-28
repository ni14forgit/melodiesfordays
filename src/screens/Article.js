import React, { useState, useEffect } from "react";
import ModifiableText from "../components/ModifiableText";
import { gray_color, font_size } from "../Constants";
import { useStore } from "../store/store";
import CaptionedMedia from "../complex/CaptionedMedia";
import ProfilePhoto from "../emily2.jpg";
import SoundCloud from "../complex/SoundCloud";
import ArticleHeader from "../complex/ArticleHeader";
import Me from "../newme.JPG";
import useWindowSize from "../UseWindowSize";
import Card from "../complex/Card";
import Emily from "../emily.jpg";
import Eric from "../eric.jpg";
import ArticleHeaderList from "../transition/articleheader/ArticleHeaderList";

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

const Article = () => {
  const [state, dispatch] = useStore();
  const title = state["title"];
  const date = state["date"];
  const location = state["location"];

  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    setHeaders([
      {
        artistProfilePhoto: ProfilePhoto,
        articleTitle: "emili debuts new single",
        date: "October 21st, 2020",
        location: "Honolulu, Hawaii",
        artistName: "emili",
        insta_link: "https://www.instagram.com/emilimusic/",
        tiktok_link: "https://www.tiktok.com/@emilimusic?source=h5_m",
        spotify_link: "https://open.spotify.com/artist/6Uiy8xNfMVssbTpgo4xIAd",
        soundcloud_link: "https://soundcloud.com/emilimusic",
      },
    ]);
  }, []);

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
  //   const profilePhoto = state["profilephoto"];
  //   const paragraphs = state["listOfParagraphs"];
  //   const media = state["listOfMedia"];
  const paragraphs = [
    "So today I got the chance to interview Emily Li! It was so cool, So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool",
    "So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool",
    "So today I got the chance to interview Emily L I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool",
    "So tonce toto interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool",
    "So today I got the chan cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool So today I got the chance to interview Emily Li! It was so cool",
  ];
  const youtube = [
    {
      url: "https://www.youtube.com/watch?v=_jcbXpQ9BPU",
      type: "youtube",
      caption: "check out emili's uke skills!",
    },
  ];
  const soundcloud = [
    {
      song_link: "https://soundcloud.com/emilimusic/better",
      artist_link: "https://soundcloud.com/emilimusic",
      song_title: "Better",
      song_player_link:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/899114770&color=%23411c0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      artist_name: "Emili",
      type: "soundcloud",
    },
  ];

  var paragraph_counter = 0;
  var youtube_counter = 0;
  var soundcloud_counter = 0;
  var media_counter = 0;
  var masterList = [];
  var generalMediaList = [];

  masterList.push({
    type: "quote",
    text:
      "I've always had people in life that have believed in me. That's something I am forever grateful for.\"",
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

  const [width, height] = useWindowSize();

  return (
    <div>
      {/* <ArticleHeader
        artistProfilePhoto={ProfilePhoto}
        articleTitle={"emili debuts new single"}
        date={"October 21st, 2020"}
        location={"Honolulu, Hawaii"}
        artistName="emili"
        insta_link={"https://www.instagram.com/emilimusic/"}
        tiktok_link={"https://www.tiktok.com/@emilimusic?source=h5_m"}
        spotify_link={"https://open.spotify.com/artist/6Uiy8xNfMVssbTpgo4xIAd"}
        soundcloud_link={"https://soundcloud.com/emilimusic"}
      /> */}

      <ArticleHeaderList items={headers} />

      <div style={{ maxWidth: "60vw", margin: "auto", marginTop: "100px" }}>
        {masterList.map((element) => {
          if (element.type === "paragraph") {
            return (
              <ModifiableText
                text={element.text}
                style={{
                  fontSize: font_size.paragraph,
                  textAlign: "left",
                  // marginLeft: "10vw",
                  marginTop: "50px",
                  marginBottom: "50px",
                  color: gray_color,
                  // width: "60vw",
                }}
              />
            );
          } else if (element.type === "youtube") {
            return (
              <CaptionedMedia
                url={element.url}
                caption={element.caption}
                width={width * 0.6}
                height={width * 0.337}
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
                style={{ textAlign: "left" }}
                width={width * 0.6}
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
      <LineBreak />

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
        {ARTIST_LIST.map((val, ind) => {
          return <Card image={val.img} title={val.text} date={val.date} />;
        })}
      </div>
    </div>
  );
};

export default Article;
