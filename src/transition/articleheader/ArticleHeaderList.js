import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import ArticleHeader from "../../complex/ArticleHeader";

const StyledGrid = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, 220px);
  // grid-gap: 20px;
  .transition-enter {
    opacity: 0;
    transform: translate(100px, 0px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0px, 0px);
    transition: 2s;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 0);
    transition: all 2000ms ease-in;
  }
`;

const ArticleHeaderList = ({ items }) => {
  return (
    <TransitionGroup component={StyledGrid}>
      {items.map((item) => (
        <CSSTransition
          in={item}
          key={item.id}
          timeout={2000}
          classNames="transition"
        >
          <ArticleHeader
            artistProfilePhoto={item.artistProfilePhoto}
            articleTitle={item.articleTitle}
            date={item.date}
            location={item.location}
            insta_link={item.insta_link}
            tiktok_link={item.tiktok_link}
            spotify_link={item.spotify_link}
            soundcloud_link={item.soundcloud_link}
            artistName={item.artistName}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ArticleHeaderList;
