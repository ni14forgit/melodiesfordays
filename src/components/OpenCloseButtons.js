import React from "react";
import { primary_color } from "../Constants";
import { SvgIcon } from "@material-ui/core";

function PlusIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 21.648438 9.214844 L 14.25 9.214844 L 14.25 2.351562 C 14.25 1.050781 13.199219 0 11.902344 0 C 10.605469 0 9.550781 1.050781 9.550781 2.351562 L 9.550781 9.214844 L 2.351562 9.214844 C 1.050781 9.214844 0 10.269531 0 11.566406 C 0 12.863281 1.050781 13.914062 2.351562 13.914062 L 9.550781 13.914062 L 9.550781 21.648438 C 9.550781 22.949219 10.605469 24 11.902344 24 C 13.199219 24 14.25 22.949219 14.25 21.652344 L 14.25 13.914062 L 21.652344 13.914062 C 22.949219 13.914062 24 12.863281 24 11.566406 C 24 10.265625 22.949219 9.214844 21.648438 9.214844 Z M 21.648438 9.214844 " />
    </SvgIcon>
  );
}

function CloseIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
    </SvgIcon>
  );
}

const OpenButton = ({ diameter, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: primary_color,
        width: diameter,
        height: diameter,
        borderRadius: diameter / 2,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <PlusIcon
        style={{
          position: "relative",
          fontSize: 18,
          color: "white",
          marginTop: "2px",
        }}
      />
    </div>
  );
};

const CloseButton = ({ diameter, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: primary_color,
        width: diameter,
        height: diameter,
        borderRadius: diameter / 2,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <CloseIcon
        style={{
          position: "relative",
          fontSize: 21,
          color: "white",
          marginTop: "0px",
          rotate: "45deg",
        }}
      />
    </div>
  );
};

export { OpenButton, CloseButton };
