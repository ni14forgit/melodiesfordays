import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import TextBlock from "./TextBlock";

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

const TextBlockList = ({ items }) => {
  return (
    // if I wrapped StyledGrid in TransitionGroup or vice versa,
    // I got some odd results. cleanest way is to use the component prop
    // of transition group to have its behavior applied to StyledGrid
    <TransitionGroup component={StyledGrid}>
      {items.map((item) => (
        <CSSTransition
          in={item}
          key={item.id}
          timeout={2000}
          classNames="transition"
        >
          <TextBlock text={item.text} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TextBlockList;
