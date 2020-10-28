import React from "react";
import { Button } from "@material-ui/core";
import ModifiableText from "../components/ModifiableText";
import {
  gray_color,
  font_size,
  primary_color,
  SpotifyIcon,
  TikTokIcon,
  SoundCloudIcon,
  InstagramIcon,
  MusicIcon,
} from "../Constants";
import useWindowSize from "../UseWindowSize";

const ArticleHeader = ({
  artistProfilePhoto,
  articleTitle,
  date,
  location,
  insta_link,
  tiktok_link,
  spotify_link,
  soundcloud_link,
  artistName,
}) => {
  const [width, height] = useWindowSize();
  return (
    <div
      style={{
        height: "450px",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <img
        src={artistProfilePhoto}
        style={{
          width: 300,
          height: 310,
          borderRadius: 20,
          marginLeft: "32vw",
          alignSelf: "center",
          position: "absolute",
          zIndex: 1,
        }}
      />
      {width > 1100 ? (
        <div
          style={{
            backgroundColor: primary_color,
            height: "450px",
            width: "60vw",
            borderRadius: "20px",
            opacity: "50%",
            marginLeft: "auto",
            marginRight: "-2vw",
            overflow: "hidden",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginRight: "2vw",
              marginLeft: "auto",
              width: "40vw",
              height: "420px",
              // border: "5px solid purple",
              marginTop: "15px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <ModifiableText
                text={articleTitle}
                style={{
                  color: "white",
                  fontSize: font_size.article.title,
                  textAlign: "left",
                  marginRight: "25px",
                  // border: "2px solid red",
                  marginBottom: "-5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  // border: "2px solid red",
                  marginLeft: "3px",
                  marginTop: "-10px",
                }}
              >
                <ModifiableText
                  text={location}
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "regular",
                    marginRight: "20px",
                  }}
                />
                <ModifiableText
                  text={date}
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "regular",
                  }}
                />
              </div>
            </div>
            <div>
              <ModifiableText
                text={"discover " + artistName + "!"}
                style={{
                  color: "white",
                  opacity: 1,
                  fontSize: 25,
                  textAlign: "left",
                  marginLeft: "2px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: "-30px",
              }}
            >
              {spotify_link ? (
                <Button
                  onClick={() => window.open(spotify_link)}
                  startIcon={
                    <SpotifyIcon
                      style={{
                        fontSize: 45,
                        color: "white",
                        marginRight: "5px",
                        marginBottom: "20px",
                      }}
                    />
                  }
                ></Button>
              ) : null}
              {insta_link ? (
                <Button
                  onClick={() => window.open(insta_link)}
                  startIcon={
                    <InstagramIcon
                      style={{
                        fontSize: 45,
                        color: "white",
                        marginRight: "5px",
                        marginBottom: "20px",
                      }}
                    />
                  }
                ></Button>
              ) : null}
              {soundcloud_link ? (
                <Button
                  onClick={() => window.open(soundcloud_link)}
                  startIcon={
                    <SoundCloudIcon
                      style={{
                        fontSize: 65,
                        color: "white",
                        marginRight: "5px",
                        marginBottom: "20px",
                      }}
                    />
                  }
                ></Button>
              ) : null}
              {tiktok_link ? (
                <Button
                  onClick={() => window.open(tiktok_link)}
                  startIcon={
                    <TikTokIcon
                      style={{
                        fontSize: 45,
                        color: "white",
                        marginRight: "5px",
                        marginBottom: "20px",
                      }}
                    />
                  }
                ></Button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ArticleHeader;
